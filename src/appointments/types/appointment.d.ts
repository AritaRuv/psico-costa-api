type Appointment = BaseEntityType & {
  id: number;
  date: Date;
  patient: Patient;
  professional: Professional;
  office: Office;
};
