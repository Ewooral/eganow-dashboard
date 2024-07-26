
import * as yup from 'yup';



export const ClassTypevalidationSchema = yup.object().shape({

  type: yup.string().required('Type is required.'),

  name: yup.string().required('Name is required.'),

  school: yup.string().required('School is required.'),

});
