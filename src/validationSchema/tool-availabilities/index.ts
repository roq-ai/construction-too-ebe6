import * as yup from 'yup';

export const toolAvailabilityValidationSchema = yup.object().shape({
  available: yup.boolean().required(),
  tool_id: yup.string().nullable(),
  outlet_id: yup.string().nullable(),
});
