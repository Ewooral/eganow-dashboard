# Root directory of app
ROOT_DIR=$(git rev-parse --show-toplevel)

# Path to Protoc Plugin
#PROTOC_GEN_TS_PATH="${ROOT_DIR}/node_modules/.bin/protoc-gen-ts"

# Directory holding all .proto files
SRC_DIR="${ROOT_DIR}/src/protos/raw"

# Directory to write generated code (.d.ts files)
OUT_DIR="${ROOT_DIR}/src/protos/generated"

#If raw folder exist update protos else fetch new protos
if [ -d "${SRC_DIR}" ]; then
  echo "${SRC_DIR} directory exists, updating protos from GITHUB."
  #Update the raw protos from github before building 
  git submodule update --init --recursive  --remote "${SRC_DIR}"
 else
  echo "${SRC_DIR} directory does not exists, initialising protos from GITHUB."
  #Initialising protos from github before building 
  git submodule add --progress --force https://github.com/EGANOW-CORE-SERVICES/EGANOW-CORE-PROTOS.git src/protos/raw
fi

#If generated folder exist, remove and create a new one.
if [ -d "${OUT_DIR}" ]; then
  echo "Removing previous generated protos."
  # Clean all existing generated files
  rm -r "${OUT_DIR}"
fi

#Create generated folder.
mkdir "${OUT_DIR}"

# Generate all messages
protoc \
    --proto_path="${SRC_DIR}" $(find "${SRC_DIR}" -name "*.proto") \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc-web_out=import_style=typescript,mode=grpcweb:${OUT_DIR}


#import_style=typescript