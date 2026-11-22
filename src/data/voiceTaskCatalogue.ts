/**
 * HealthSure — Voice Agent 500 Unique Task Scenarios Catalogue (T001 - T500)
 * src/data/voiceTaskCatalogue.ts
 *
 * Generated structured catalogue covering 10 clinical and healthcare workflow categories
 * with exactly 50 unique, realistic scenarios per category.
 */

export interface VoiceTaskScenario {
  id: string; // T001 - T500
  category: string;
  categoryIndex: number;
  utterance: string;
  language: 'hi' | 'en';
  expectedIntent: string;
  expectedEntities: {
    day?: string;
    date?: string;
    speciality?: string;
    doctorName?: string;
    facility?: string;
    time?: string;
    mode?: string;
  };
  backendAction: string;
  description: string;
}

export const VOICE_TASK_CATALOGUE: VoiceTaskScenario[] = [
  {
    "id": "T001",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Wednesday ko kaun-kaun se doctors available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Wednesday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Wednesday."
  },
  {
    "id": "T002",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Friday ko available doctors batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T003",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Monday ko Cardiology mein kaun available hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Monday",
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Monday."
  },
  {
    "id": "T004",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Kal kitne doctors available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Tomorrow"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Tomorrow."
  },
  {
    "id": "T005",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Next week doctors ka schedule batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T006",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Sunday ko koi doctor available hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Sunday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Sunday."
  },
  {
    "id": "T007",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Morning mein available doctors dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "time": "Morning"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T008",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "11 baje kaun available hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "time": "11:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T009",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Kya Dr. Ananya Mehta Friday ko available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T010",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Is week sabse zyada doctors kis din available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T011",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Show available doctors on Wednesday.",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Wednesday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Wednesday."
  },
  {
    "id": "T012",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Which doctors are working on Friday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T013",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Is there any Cardiologist available on Monday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Monday",
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Monday."
  },
  {
    "id": "T014",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "How many doctors are available tomorrow?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Tomorrow"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Tomorrow."
  },
  {
    "id": "T015",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Show the weekly doctor roster.",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T016",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Are any doctors available on Sunday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Sunday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Sunday."
  },
  {
    "id": "T017",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "List doctors available in the morning.",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "time": "Morning"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T018",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Who is available at 11 AM?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "time": "11:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T019",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Is Dr. Ananya Mehta available this Friday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T020",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Which day has the highest doctor availability?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T021",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Tuesday ko General Medicine ke doctors batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Tuesday",
      "speciality": "General Medicine"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Tuesday."
  },
  {
    "id": "T022",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Thursday ko Pediatrician milenge kya?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Thursday",
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Thursday."
  },
  {
    "id": "T023",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Saturday ko Dermatology specialist available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Saturday",
      "speciality": "Dermatology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Saturday."
  },
  {
    "id": "T024",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Aaj kaunse doctors OPD mein baithe hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Today"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Today."
  },
  {
    "id": "T025",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Parso kaunse doctors aane wale hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "DayAfterTomorrow"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for DayAfterTomorrow."
  },
  {
    "id": "T026",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Weekend par doctors ka time batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Weekend"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Weekend."
  },
  {
    "id": "T027",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Afternoon mein available doctors list karo.",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "time": "Afternoon"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T028",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Evening mein 4 baje doctor milenge?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "time": "04:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for general query."
  },
  {
    "id": "T029",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Rahul Verma kis kis din aate hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Rahul Verma."
  },
  {
    "id": "T030",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Priya Nair ka schedule kya hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "doctorName": "Dr. Priya Nair"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Priya Nair."
  },
  {
    "id": "T031",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Arjun Kapoor Wednesday ko milenge?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Wednesday",
      "doctorName": "Dr. Arjun Kapoor"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Wednesday."
  },
  {
    "id": "T032",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Neha Sharma kis din OPD karti hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "doctorName": "Dr. Neha Sharma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Neha Sharma."
  },
  {
    "id": "T033",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Vivek Rao Orthopedics mein kab milenge?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "Orthopedics",
      "doctorName": "Dr. Vivek Rao"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Vivek Rao."
  },
  {
    "id": "T034",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Kavita Joshi ENT clinic kab hoti hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "ENT",
      "doctorName": "Dr. Kavita Joshi"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Kavita Joshi."
  },
  {
    "id": "T035",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Sameer Khan Neurology checkup ke liye kab hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "Neurology",
      "doctorName": "Dr. Sameer Khan"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Sameer Khan."
  },
  {
    "id": "T036",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Rajesh Patil Khed PHC mein kab aate hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "doctorName": "Dr. Rajesh Patil",
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Rajesh Patil."
  },
  {
    "id": "T037",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Show ENT doctors available on Monday.",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Monday",
      "speciality": "ENT"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Monday."
  },
  {
    "id": "T038",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Are there orthopedic doctors on Tuesday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Tuesday",
      "speciality": "Orthopedics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Tuesday."
  },
  {
    "id": "T039",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Which gynecologists are available on Wednesday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Wednesday",
      "speciality": "Gynecology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Wednesday."
  },
  {
    "id": "T040",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Find pediatricians available on Thursday.",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Thursday",
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Thursday."
  },
  {
    "id": "T041",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Can I see a dermatologist on Saturday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Saturday",
      "speciality": "Dermatology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Saturday."
  },
  {
    "id": "T042",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Who is the earliest doctor on Friday?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T043",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Friday ko sabse pehla doctor kaun aayega?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T044",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Monday subah 09:30 AM par doctor hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Monday",
      "time": "09:30 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Monday."
  },
  {
    "id": "T045",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Wednesday 10 AM par kaunsa specialist hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Wednesday",
      "time": "10:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Wednesday."
  },
  {
    "id": "T046",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Friday dopahar 2 baje doctor checkup ho sakta hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "day": "Friday",
      "time": "02:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Friday."
  },
  {
    "id": "T047",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Is Dr. Pooja Sawant available for eye checkup this week?",
    "language": "en",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "Ophthalmology",
      "doctorName": "Dr. Pooja Sawant"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Pooja Sawant."
  },
  {
    "id": "T048",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Sandeep Gokhale chest specialist kab available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "Pulmonology",
      "doctorName": "Dr. Sandeep Gokhale"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Sandeep Gokhale."
  },
  {
    "id": "T049",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Meera Chougule psychiatrist kab milengi?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "Psychiatry",
      "doctorName": "Dr. Meera Chougule"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Meera Chougule."
  },
  {
    "id": "T050",
    "category": "Doctor Availability",
    "categoryIndex": 1,
    "utterance": "Dr. Deepa Shinde diabetes doctor kab available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_AVAILABILITY",
    "expectedEntities": {
      "speciality": "Endocrinology",
      "doctorName": "Dr. Deepa Shinde"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Query doctor availability for Dr. Deepa Shinde."
  },
  {
    "id": "T051",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Cardiology ke doctors dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Cardiology."
  },
  {
    "id": "T052",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Gynecologist available hai kya?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Gynecology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Gynecology."
  },
  {
    "id": "T053",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Best available physician kaun hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "General Medicine"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for General Medicine."
  },
  {
    "id": "T054",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Pediatrician kis facility mein milenge?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Pediatrics."
  },
  {
    "id": "T055",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Skin specialist batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Dermatology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dermatology."
  },
  {
    "id": "T056",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Neurology specialist ka schedule dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Neurology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Neurology."
  },
  {
    "id": "T057",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Rahul Verma ka profile batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dr. Rahul Verma."
  },
  {
    "id": "T058",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Female doctors kaun available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T059",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Kisi nearby PHC mein doctor available hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "facility": "PHC"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T060",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Is week orthopedic specialist kab available hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Orthopedics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Orthopedics."
  },
  {
    "id": "T061",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Show all Cardiology specialists.",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Cardiology."
  },
  {
    "id": "T062",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Is there a gynecologist available?",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Gynecology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Gynecology."
  },
  {
    "id": "T063",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Find general physicians near me.",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "General Medicine"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for General Medicine."
  },
  {
    "id": "T064",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Which facility has pediatric doctors?",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Pediatrics."
  },
  {
    "id": "T065",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Show me skin specialists.",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Dermatology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dermatology."
  },
  {
    "id": "T066",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "What is the schedule of neurologists?",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Neurology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Neurology."
  },
  {
    "id": "T067",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Show Dr. Rahul Verma profile and qualification.",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dr. Rahul Verma."
  },
  {
    "id": "T068",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "List all female doctors.",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T069",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Are there doctors at PHC Khed?",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T070",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "When can I consult an orthopedic doctor?",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Orthopedics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Orthopedics."
  },
  {
    "id": "T071",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dil ke doctor ki list dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Cardiology."
  },
  {
    "id": "T072",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Haddi ke doctor kaun hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Orthopedics"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Orthopedics."
  },
  {
    "id": "T073",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Kaan naak gale ke specialist doctor batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "ENT"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for ENT."
  },
  {
    "id": "T074",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dimag ke doctor ki details batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Neurology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Neurology."
  },
  {
    "id": "T075",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Aankh ke doctor Ophthalmology mein kaun hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Ophthalmology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Ophthalmology."
  },
  {
    "id": "T076",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Saans aur phephde ke specialist Pulmonology dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Pulmonology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Pulmonology."
  },
  {
    "id": "T077",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Manasik rog visheshagya Psychiatry specialist kaun hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Psychiatry"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Psychiatry."
  },
  {
    "id": "T078",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Sugar aur diabetes ke endocrinologist kaun hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Endocrinology"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Endocrinology."
  },
  {
    "id": "T079",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Surgery wale surgeon doctor batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "General Surgery"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for General Surgery."
  },
  {
    "id": "T080",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Ananya Mehta ka experience aur hospital batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dr. Ananya Mehta."
  },
  {
    "id": "T081",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Priya Nair ki qualification kya hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "doctorName": "Dr. Priya Nair"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dr. Priya Nair."
  },
  {
    "id": "T082",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Arjun Kapoor bacho ke doctor ki details do.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Pediatrics",
      "doctorName": "Dr. Arjun Kapoor"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Pediatrics."
  },
  {
    "id": "T083",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Vivek Rao ka room number aur designation kya hai?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "doctorName": "Dr. Vivek Rao"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dr. Vivek Rao."
  },
  {
    "id": "T084",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "District Hospital Ratnagiri mein kaun kaun se specialists hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "facility": "District Hospital Ratnagiri"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T085",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "District Hospital Pune ke doctors dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "facility": "District Hospital Pune"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T086",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Sawantwadi SDH mein ENT doctor kaun hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "ENT",
      "facility": "Sub-District Hospital Sawantwadi"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for ENT."
  },
  {
    "id": "T087",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Show doctors who do teleconsultations.",
    "language": "en",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "mode": "teleconsultation"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T088",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Video call par kaunse doctor milte hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "mode": "teleconsultation"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T089",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Outreach camps mein kaunse doctors jate hain?",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "mode": "outreach"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for clinical category."
  },
  {
    "id": "T090",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Neha Sharma skin clinic timings batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Dermatology",
      "doctorName": "Dr. Neha Sharma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Dermatology."
  },
  {
    "id": "T091",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Kavita Joshi ENT specialist qualification batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "ENT",
      "doctorName": "Dr. Kavita Joshi"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for ENT."
  },
  {
    "id": "T092",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Sunita Kulkarni gynecologist details dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Gynecology",
      "doctorName": "Dr. Sunita Kulkarni"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Gynecology."
  },
  {
    "id": "T093",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Amit Deshmukh heart specialist schedule batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Cardiology",
      "doctorName": "Dr. Amit Deshmukh"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Cardiology."
  },
  {
    "id": "T094",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Sneha Bhonsle pediatrician profile batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Pediatrics",
      "doctorName": "Dr. Sneha Bhonsle"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Pediatrics."
  },
  {
    "id": "T095",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Vikram Malhotra ENT surgeon schedule dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "ENT",
      "doctorName": "Dr. Vikram Malhotra"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for ENT."
  },
  {
    "id": "T096",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Pooja Sawant eye specialist clinic dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Ophthalmology",
      "doctorName": "Dr. Pooja Sawant"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Ophthalmology."
  },
  {
    "id": "T097",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Sandeep Gokhale pulmonologist clinic batao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Pulmonology",
      "doctorName": "Dr. Sandeep Gokhale"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Pulmonology."
  },
  {
    "id": "T098",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Meera Chougule psychiatrist schedule dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Psychiatry",
      "doctorName": "Dr. Meera Chougule"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Psychiatry."
  },
  {
    "id": "T099",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Nitin Kamble general surgeon profile do.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "General Surgery",
      "doctorName": "Dr. Nitin Kamble"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for General Surgery."
  },
  {
    "id": "T100",
    "category": "Specialty & Doctor Discovery",
    "categoryIndex": 2,
    "utterance": "Dr. Deepa Shinde endocrinologist details dikhao.",
    "language": "hi",
    "expectedIntent": "DOCTOR_DISCOVERY",
    "expectedEntities": {
      "speciality": "Endocrinology",
      "doctorName": "Dr. Deepa Shinde"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Discover specialists or doctor profiles for Endocrinology."
  },
  {
    "id": "T101",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Kal 11 AM ka slot available hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Tomorrow",
      "time": "11:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 11:00 AM."
  },
  {
    "id": "T102",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Friday afternoon mein appointment mil sakti hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday",
      "time": "Afternoon"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Afternoon."
  },
  {
    "id": "T103",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Ananya ke available slots batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Dr. Ananya Mehta."
  },
  {
    "id": "T104",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "10 AM occupied hai ya available?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "10:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 10:00 AM."
  },
  {
    "id": "T105",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Next available appointment kab hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for appointment query."
  },
  {
    "id": "T106",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Kya 2 PM ka slot book ho sakta hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "02:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 02:00 PM."
  },
  {
    "id": "T107",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Ek doctor ke kitne slots available hain?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for appointment query."
  },
  {
    "id": "T108",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Evening appointment possible hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "Evening"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Evening."
  },
  {
    "id": "T109",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Wednesday ko morning slots dikhao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Wednesday",
      "time": "Morning"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Morning."
  },
  {
    "id": "T110",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Agar mera preferred slot full hai toh alternative batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for appointment query."
  },
  {
    "id": "T111",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Is 11 AM slot available tomorrow?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Tomorrow",
      "time": "11:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 11:00 AM."
  },
  {
    "id": "T112",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Can I get an appointment on Friday afternoon?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday",
      "time": "Afternoon"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Afternoon."
  },
  {
    "id": "T113",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Show available time slots for Dr. Ananya.",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Dr. Ananya Mehta."
  },
  {
    "id": "T114",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Is 10 AM slot free or booked?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "10:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 10:00 AM."
  },
  {
    "id": "T115",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "When is the next earliest available slot?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for appointment query."
  },
  {
    "id": "T116",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Can I book a 2 PM slot?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "02:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 02:00 PM."
  },
  {
    "id": "T117",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "How many slots are open for this doctor?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for appointment query."
  },
  {
    "id": "T118",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Are there any evening slots available?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "Evening"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Evening."
  },
  {
    "id": "T119",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Show Wednesday morning appointment slots.",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Wednesday",
      "time": "Morning"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Morning."
  },
  {
    "id": "T120",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Suggest alternative time slots if 11 AM is full.",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for appointment query."
  },
  {
    "id": "T121",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Rahul Verma ke Wednesday ke slots dikhao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Wednesday",
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Wednesday."
  },
  {
    "id": "T122",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Priya Nair ke Friday ke free slots batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday",
      "doctorName": "Dr. Priya Nair"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Friday."
  },
  {
    "id": "T123",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Arjun Kapoor ke subah ke slots kaunse hain?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "Morning",
      "doctorName": "Dr. Arjun Kapoor"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Morning."
  },
  {
    "id": "T124",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Neha Sharma ke Saturday slots open hain kya?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Saturday",
      "doctorName": "Dr. Neha Sharma"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Saturday."
  },
  {
    "id": "T125",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Vivek Rao ke 11:30 AM slot ka status batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "11:30 AM",
      "doctorName": "Dr. Vivek Rao"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 11:30 AM."
  },
  {
    "id": "T126",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Kavita Joshi ke afternoon slots available hain?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "Afternoon",
      "doctorName": "Dr. Kavita Joshi"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Afternoon."
  },
  {
    "id": "T127",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Sameer Khan ke 4 baje ka slot khali hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "04:00 PM",
      "doctorName": "Dr. Sameer Khan"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 04:00 PM."
  },
  {
    "id": "T128",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Monday subah 09:30 AM slot open hai kya?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Monday",
      "time": "09:30 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 09:30 AM."
  },
  {
    "id": "T129",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Wednesday 10:30 AM ka time slot milega?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Wednesday",
      "time": "10:30 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 10:30 AM."
  },
  {
    "id": "T130",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Friday 12 PM dopahar slot check karo.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday",
      "time": "12:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 12:00 PM."
  },
  {
    "id": "T131",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "12:30 PM ka slot available hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "12:30 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 12:30 PM."
  },
  {
    "id": "T132",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "01:30 PM par doctor se mil sakte hain?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "01:30 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 01:30 PM."
  },
  {
    "id": "T133",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "02:30 PM slot open hai ya occupied?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "02:30 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 02:30 PM."
  },
  {
    "id": "T134",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "03:00 PM ka time slot dikhao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "03:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 03:00 PM."
  },
  {
    "id": "T135",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "03:30 PM par checkup slot mil sakta hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "03:30 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 03:30 PM."
  },
  {
    "id": "T136",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Aaj kitne slots bache hain?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Today"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Today."
  },
  {
    "id": "T137",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Kal subah kitne appointment slots khali hain?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Tomorrow",
      "time": "Morning"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Morning."
  },
  {
    "id": "T138",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Sabse pehla slot kaunsa hai Friday ko?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Friday."
  },
  {
    "id": "T139",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Monday ko earliest appointment kab milegi?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Monday"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Monday."
  },
  {
    "id": "T140",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Wednesday dopahar ka earliest slot batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Wednesday",
      "time": "Afternoon"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Afternoon."
  },
  {
    "id": "T141",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "11 AM ke aas paas kaunsa slot free hai?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "11:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 11:00 AM."
  },
  {
    "id": "T142",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Agar 10 AM full ho toh agla slot batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "time": "10:00 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 10:00 AM."
  },
  {
    "id": "T143",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Ananya ke kitne slots bache hain Friday ko?",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Friday."
  },
  {
    "id": "T144",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Rajesh Patil ke PHC Khed mein slots dikhao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Rajesh Patil",
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Dr. Rajesh Patil."
  },
  {
    "id": "T145",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Dr. Amit Deshmukh ke teleconsultation slots batao.",
    "language": "hi",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Amit Deshmukh",
      "mode": "teleconsultation"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Dr. Amit Deshmukh."
  },
  {
    "id": "T146",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Show afternoon slots on Monday.",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Monday",
      "time": "Afternoon"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Afternoon."
  },
  {
    "id": "T147",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Show morning slots on Tuesday.",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Tuesday",
      "time": "Morning"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Morning."
  },
  {
    "id": "T148",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Are there open slots at 04:00 PM Friday?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Friday",
      "time": "04:00 PM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 04:00 PM."
  },
  {
    "id": "T149",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Check slot availability for Dr. Sneha Bhonsle.",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Sneha Bhonsle"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for Dr. Sneha Bhonsle."
  },
  {
    "id": "T150",
    "category": "Appointment Slot Queries",
    "categoryIndex": 3,
    "utterance": "Can I book an appointment at 10:30 AM today?",
    "language": "en",
    "expectedIntent": "APPOINTMENT_SLOT_QUERY",
    "expectedEntities": {
      "day": "Today",
      "time": "10:30 AM"
    },
    "backendAction": "patientService.getDoctors",
    "description": "Check slot availability, timing, or alternative slots for 10:30 AM."
  },
  {
    "id": "T151",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Mere liye appointment book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T152",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Friday ko Cardiology appointment chahiye.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Friday",
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Cardiology."
  },
  {
    "id": "T153",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Ananya ke saath 11 baje appointment book karni hai.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "11:00 AM",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Ananya Mehta."
  },
  {
    "id": "T154",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Next available slot book karne mein help karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T155",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Mere liye morning appointment arrange karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "Morning"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Morning."
  },
  {
    "id": "T156",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Kya appointment confirm ho gayi?",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T157",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Appointment details batao.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T158",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Kya main appointment book kar sakta hoon?",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T159",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Mujhe doctor select karne mein help karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T160",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Available alternative slot suggest karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T161",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Book an appointment for me.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T162",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "I need a Cardiology appointment on Friday.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Friday",
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Cardiology."
  },
  {
    "id": "T163",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Book an appointment with Dr. Ananya at 11 AM.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "11:00 AM",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Ananya Mehta."
  },
  {
    "id": "T164",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Help me book the next available slot.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T165",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Arrange a morning appointment for me.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "Morning"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Morning."
  },
  {
    "id": "T166",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Is my appointment confirmed?",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T167",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Show appointment booking details.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T168",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Can I book an appointment right now?",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T169",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Help me choose a doctor for booking.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T170",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Suggest alternative slots for appointment.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T171",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Wednesday 10 AM par Dr. Rahul Verma ke saath appointment book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Wednesday",
      "time": "10:00 AM",
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Rahul Verma."
  },
  {
    "id": "T172",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Friday subah Dr. Priya Nair ke saath slot book kar do.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Friday",
      "time": "Morning",
      "doctorName": "Dr. Priya Nair"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Priya Nair."
  },
  {
    "id": "T173",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Arjun Kapoor ke saath appointment fix karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Arjun Kapoor"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Arjun Kapoor."
  },
  {
    "id": "T174",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Neha Sharma ke skin clinic mein appointment book karni hai.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Neha Sharma",
      "speciality": "Dermatology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Neha Sharma."
  },
  {
    "id": "T175",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Vivek Rao ke saath kal appointment schedule karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Tomorrow",
      "doctorName": "Dr. Vivek Rao"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Vivek Rao."
  },
  {
    "id": "T176",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Kavita Joshi ke saath ENT consultation book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Kavita Joshi",
      "speciality": "ENT"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Kavita Joshi."
  },
  {
    "id": "T177",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Sameer Khan ke saath Neurology appointment lagao.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Sameer Khan",
      "speciality": "Neurology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Sameer Khan."
  },
  {
    "id": "T178",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Rajesh Patil ke saath PHC Khed mein appointment book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Rajesh Patil",
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Rajesh Patil."
  },
  {
    "id": "T179",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Sunita Kulkarni ke saath Thursday ko slot book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Thursday",
      "doctorName": "Dr. Sunita Kulkarni"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Sunita Kulkarni."
  },
  {
    "id": "T180",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Dr. Amit Deshmukh ke saath online appointment book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Amit Deshmukh",
      "mode": "teleconsultation"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Amit Deshmukh."
  },
  {
    "id": "T181",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "General Medicine mein kal subah appointment chahiye.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Tomorrow",
      "time": "Morning",
      "speciality": "General Medicine"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for General Medicine."
  },
  {
    "id": "T182",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Pediatrics mein bachhe ke checkup ke liye slot book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Pediatrics."
  },
  {
    "id": "T183",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Orthopedics mein haddi ke doctor ke saath appointment book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "Orthopedics"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Orthopedics."
  },
  {
    "id": "T184",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Ophthalmology aankh ke checkup ke liye appointment fix karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "Ophthalmology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Ophthalmology."
  },
  {
    "id": "T185",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Pulmonology chest doctor ke saath appointment kar do.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "Pulmonology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Pulmonology."
  },
  {
    "id": "T186",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Psychiatry doctor ke saath slot book karna hai.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "Psychiatry"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Psychiatry."
  },
  {
    "id": "T187",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "General Surgery consultation ke liye appointment book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "General Surgery"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for General Surgery."
  },
  {
    "id": "T188",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Endocrinology sugar specialist ke saath appointment chahiye.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "speciality": "Endocrinology"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Endocrinology."
  },
  {
    "id": "T189",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "11:30 AM ka slot book kar do.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "11:30 AM"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for 11:30 AM."
  },
  {
    "id": "T190",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "02:00 PM dopahar ka slot book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "02:00 PM"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for 02:00 PM."
  },
  {
    "id": "T191",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "04:00 PM shaam ka time slot book kar do.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "04:00 PM"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for 04:00 PM."
  },
  {
    "id": "T192",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Friday 09:30 AM ka pehla slot book karo.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Friday",
      "time": "09:30 AM"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for 09:30 AM."
  },
  {
    "id": "T193",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Book Dr. Ananya Mehta Friday 11:00 AM.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Friday",
      "time": "11:00 AM",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Ananya Mehta."
  },
  {
    "id": "T194",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Book general physician for tomorrow morning.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Tomorrow",
      "time": "Morning",
      "speciality": "General Medicine"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for General Medicine."
  },
  {
    "id": "T195",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Book pediatrics appointment for Wednesday.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "day": "Wednesday",
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Pediatrics."
  },
  {
    "id": "T196",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Schedule an appointment with Dr. Vivek Rao.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "doctorName": "Dr. Vivek Rao"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Vivek Rao."
  },
  {
    "id": "T197",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Confirm booking for Dr. Ananya Mehta at 11 AM.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {
      "time": "11:00 AM",
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for Dr. Ananya Mehta."
  },
  {
    "id": "T198",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Haan, appointment confirm kar do.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T199",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Yes, please proceed with booking.",
    "language": "en",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T200",
    "category": "Appointment Booking",
    "categoryIndex": 4,
    "utterance": "Nahi, abhi book mat karo cancel kar do.",
    "language": "hi",
    "expectedIntent": "BOOK_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.bookAppointment",
    "description": "Initiate or confirm appointment booking for appointment workflow."
  },
  {
    "id": "T201",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri next appointment kab hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri next appointment kab hai?)."
  },
  {
    "id": "T202",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Mere saare upcoming appointments batao.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Mere saare upcoming appointments batao.)."
  },
  {
    "id": "T203",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Aaj meri appointment hai kya?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Aaj meri appointment hai kya?)."
  },
  {
    "id": "T204",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment cancel karni hai.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Appointment cancel karni hai.)."
  },
  {
    "id": "T205",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Friday wali appointment cancel karo.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Friday wali appointment cancel karo.)."
  },
  {
    "id": "T206",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri appointment ka time batao.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri appointment ka time batao.)."
  },
  {
    "id": "T207",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment reschedule karni hai.",
    "language": "hi",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Appointment reschedule karni hai.)."
  },
  {
    "id": "T208",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Pichhli appointment kab thi?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Pichhli appointment kab thi?)."
  },
  {
    "id": "T209",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment kis doctor ke saath hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Appointment kis doctor ke saath hai?)."
  },
  {
    "id": "T210",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri cancelled appointments dikhao.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri cancelled appointments dikhao.)."
  },
  {
    "id": "T211",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "When is my next appointment?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (When is my next appointment?)."
  },
  {
    "id": "T212",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Show all my upcoming appointments.",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Show all my upcoming appointments.)."
  },
  {
    "id": "T213",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Do I have an appointment today?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Do I have an appointment today?)."
  },
  {
    "id": "T214",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "I want to cancel my appointment.",
    "language": "en",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (I want to cancel my appointment.)."
  },
  {
    "id": "T215",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Cancel my Friday appointment.",
    "language": "en",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Cancel my Friday appointment.)."
  },
  {
    "id": "T216",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "What time is my scheduled appointment?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (What time is my scheduled appointment?)."
  },
  {
    "id": "T217",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "I need to reschedule my appointment.",
    "language": "en",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (I need to reschedule my appointment.)."
  },
  {
    "id": "T218",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "When was my previous appointment?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (When was my previous appointment?)."
  },
  {
    "id": "T219",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Which doctor is my appointment with?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Which doctor is my appointment with?)."
  },
  {
    "id": "T220",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Show my cancelled appointments.",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Show my cancelled appointments.)."
  },
  {
    "id": "T221",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri appointment ka token number kya hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri appointment ka token number kya hai?)."
  },
  {
    "id": "T222",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Doctor ka room number kahan hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Doctor ka room number kahan hai?)."
  },
  {
    "id": "T223",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Kal meri koi appointment hai kya?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Kal meri koi appointment hai kya?)."
  },
  {
    "id": "T224",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri Dr. Ananya wali appointment dikhao.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri Dr. Ananya wali appointment dikhao.)."
  },
  {
    "id": "T225",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Dr. Rahul Verma wali appointment ka status kya hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Dr. Rahul Verma wali appointment ka status kya hai?)."
  },
  {
    "id": "T226",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment ka din shift kar do.",
    "language": "hi",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Appointment ka din shift kar do.)."
  },
  {
    "id": "T227",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment ko agle hafte reschedule karo.",
    "language": "hi",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Appointment ko agle hafte reschedule karo.)."
  },
  {
    "id": "T228",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment ka time 11 baje se 2 baje badal do.",
    "language": "hi",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {
      "time": "02:00 PM"
    },
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Appointment ka time 11 baje se 2 baje badal do.)."
  },
  {
    "id": "T229",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment dusre din shift karo.",
    "language": "hi",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Appointment dusre din shift karo.)."
  },
  {
    "id": "T230",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Friday appointment ko Wednesday kar do.",
    "language": "hi",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {
      "day": "Wednesday"
    },
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Friday appointment ko Wednesday kar do.)."
  },
  {
    "id": "T231",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Mujhe hospital nahi jana, appointment cancel karo.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Mujhe hospital nahi jana, appointment cancel karo.)."
  },
  {
    "id": "T232",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Appointment hata do.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Appointment hata do.)."
  },
  {
    "id": "T233",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Booking delete kar do.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Booking delete kar do.)."
  },
  {
    "id": "T234",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Haan, appointment cancel confirm karo.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Haan, appointment cancel confirm karo.)."
  },
  {
    "id": "T235",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Nahi, appointment cancel mat karo.",
    "language": "hi",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Nahi, appointment cancel mat karo.)."
  },
  {
    "id": "T236",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri active bookings list karo.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri active bookings list karo.)."
  },
  {
    "id": "T237",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Hospital visit se pehle appointment details dikhao.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Hospital visit se pehle appointment details dikhao.)."
  },
  {
    "id": "T238",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Kya meri appointment confirmed status mein hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Kya meri appointment confirmed status mein hai?)."
  },
  {
    "id": "T239",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri teleconsultation appointment kis time par hai?",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {
      "mode": "teleconsultation"
    },
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri teleconsultation appointment kis time par hai?)."
  },
  {
    "id": "T240",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Show token number for my next consultation.",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Show token number for my next consultation.)."
  },
  {
    "id": "T241",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "What is the clinic room for my appointment?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (What is the clinic room for my appointment?)."
  },
  {
    "id": "T242",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Reschedule my booking to next week.",
    "language": "en",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Reschedule my booking to next week.)."
  },
  {
    "id": "T243",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Shift my appointment time to 2 PM.",
    "language": "en",
    "expectedIntent": "RESCHEDULE_APPOINTMENT",
    "expectedEntities": {
      "time": "02:00 PM"
    },
    "backendAction": "patientService.rescheduleAppointment",
    "description": "Manage patient appointment: RESCHEDULE_APPOINTMENT (Shift my appointment time to 2 PM.)."
  },
  {
    "id": "T244",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Cancel my booked consultation.",
    "language": "en",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Cancel my booked consultation.)."
  },
  {
    "id": "T245",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Confirm appointment cancellation.",
    "language": "en",
    "expectedIntent": "CANCEL_APPOINTMENT",
    "expectedEntities": {},
    "backendAction": "patientService.cancelAppointment",
    "description": "Manage patient appointment: CANCEL_APPOINTMENT (Confirm appointment cancellation.)."
  },
  {
    "id": "T246",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Show my past completed appointments.",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Show my past completed appointments.)."
  },
  {
    "id": "T247",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Do I have any appointment this Saturday?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {
      "day": "Saturday"
    },
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Do I have any appointment this Saturday?)."
  },
  {
    "id": "T248",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Is my consultation in-person or online?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Is my consultation in-person or online?)."
  },
  {
    "id": "T249",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Where do I need to go for my appointment?",
    "language": "en",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Where do I need to go for my appointment?)."
  },
  {
    "id": "T250",
    "category": "Appointment Management",
    "categoryIndex": 5,
    "utterance": "Meri sabhi appointments ki summary dikhao.",
    "language": "hi",
    "expectedIntent": "VIEW_APPOINTMENTS",
    "expectedEntities": {},
    "backendAction": "patientService.getAppointments",
    "description": "Manage patient appointment: VIEW_APPOINTMENTS (Meri sabhi appointments ki summary dikhao.)."
  },
  {
    "id": "T251",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Nearby PHC kaun sa hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T252",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "District hospital ka address batao.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "District Hospital Ratnagiri"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for District Hospital Ratnagiri."
  },
  {
    "id": "T253",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Khed PHC mein kaun available hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Khed."
  },
  {
    "id": "T254",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Kis facility mein specialist milenge?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T255",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC aur CHC mein kya difference hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T256",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Kis hospital mein Cardiology available hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for Cardiology."
  },
  {
    "id": "T257",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Facility timings batao.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T258",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Available healthcare centres list karo.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T259",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Nearest specialist facility kaunsi hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T260",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Hospital referral kaise process hota hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T261",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Which is the nearest PHC?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T262",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Give me the address of District Hospital Ratnagiri.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "District Hospital Ratnagiri"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for District Hospital Ratnagiri."
  },
  {
    "id": "T263",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Who is available at Khed PHC?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Khed."
  },
  {
    "id": "T264",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Which hospital has specialist doctors?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T265",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "What is the difference between PHC and CHC?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T266",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Which hospital provides Cardiology services?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for Cardiology."
  },
  {
    "id": "T267",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "What are the operating hours of health facilities?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T268",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "List all available government health centres.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T269",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "What is the nearest referral facility?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T270",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "How does hospital referral work in HealthSure?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T271",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC Chiplun ka contact phone number kya hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Chiplun"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Chiplun."
  },
  {
    "id": "T272",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC Dapoli kahan par sthit hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Dapoli"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Dapoli."
  },
  {
    "id": "T273",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC Guhagar ke timings kya hain?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Guhagar"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Guhagar."
  },
  {
    "id": "T274",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "District Hospital Pune ka phone number do.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "District Hospital Pune"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for District Hospital Pune."
  },
  {
    "id": "T275",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Sub-District Hospital Sawantwadi kis district mein hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "Sub-District Hospital Sawantwadi"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for Sub-District Hospital Sawantwadi."
  },
  {
    "id": "T276",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Emergency case mein PHC jaana chahiye ya District Hospital?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T277",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC mein OPD timings kya hoti hain?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T278",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "District hospital mein OPD timings kya hain?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T279",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Sub-district hospital SDH ka kya kaam hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T280",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Mera primary health centre kaun sa hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T281",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Khed taluka mein kaun si health facilities hain?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Khed."
  },
  {
    "id": "T282",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Ratnagiri district ke government hospitals batao.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "District Hospital Ratnagiri"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for District Hospital Ratnagiri."
  },
  {
    "id": "T283",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Kis facility mein X-ray aur blood test lab hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T284",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC par basic dawaiyan milti hain kya?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T285",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC ambulance availability kya hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T286",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Emergency ward kis hospital mein 24 ghante khula hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T287",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "ICU facility kis hospital mein uplabdh hai?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T288",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Specialist doctors kis hospital mein baithte hain?",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T289",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "PHC Khed ka contact number batao.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Khed."
  },
  {
    "id": "T290",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Show all facilities in Ratnagiri district.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "District Hospital Ratnagiri"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for District Hospital Ratnagiri."
  },
  {
    "id": "T291",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Contact number for District Hospital Pune.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "District Hospital Pune"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for District Hospital Pune."
  },
  {
    "id": "T292",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Services available at Sawantwadi Sub-District Hospital.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "Sub-District Hospital Sawantwadi"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for Sub-District Hospital Sawantwadi."
  },
  {
    "id": "T293",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Is emergency service 24x7 at District Hospital?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T294",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Where can I get specialized heart care?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for Cardiology."
  },
  {
    "id": "T295",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Where are pediatric ICU facilities available?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for Pediatrics."
  },
  {
    "id": "T296",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Health facilities in Chiplun taluka.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Chiplun"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Chiplun."
  },
  {
    "id": "T297",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Does PHC Dapoli have maternal care?",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Dapoli"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Dapoli."
  },
  {
    "id": "T298",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Guhagar PHC operational status.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {
      "facility": "PHC Guhagar"
    },
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for PHC Guhagar."
  },
  {
    "id": "T299",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "Nearest government hospital from my village.",
    "language": "en",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T300",
    "category": "Facilities & Healthcare Access",
    "categoryIndex": 6,
    "utterance": "HealthSure network facilities list dikhao.",
    "language": "hi",
    "expectedIntent": "FACILITIES_ACCESS",
    "expectedEntities": {},
    "backendAction": "patientService.getFacilities",
    "description": "Lookup healthcare facilities, timings, services, or comparisons for network facilities."
  },
  {
    "id": "T301",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Mera referral status kya hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T302",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral accept hua kya?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T303",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral kis hospital ko bheja gaya?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T304",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Hospital ne referral receive kiya?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T305",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "OPD token generate hua kya?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T306",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Mera OPD token number batao.",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T307",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral pending kyun hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T308",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Specialist referral kaise milega?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T309",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Doctor referral create kar sakte hain?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T310",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral history dikhao.",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T311",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "What is my referral status?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T312",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Has my hospital referral been accepted?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T313",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Which hospital was my referral sent to?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T314",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Did the hospital receive my referral?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T315",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Is my OPD token generated?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T316",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "What is my OPD token number?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T317",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Why is my referral currently pending?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T318",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "How can I get a specialist referral?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T319",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Can the PHC doctor create a referral for me?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T320",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Show my referral history.",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T321",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Mera referral kis doctor ne banaya tha?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T322",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral ki priority kya hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T323",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Kya mera referral urgent priority par hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T324",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral accept hone ke baad kya karna hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T325",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Hospital mein OPD token kahan dikhana hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T326",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral token lekar kis counter par jana hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T327",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Mera referral ID number kya hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T328",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral kis bimari ya reason ke liye banaya gaya tha?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T329",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Kya mujhe District Hospital Ratnagiri refer kiya gaya hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {
      "facility": "District Hospital Ratnagiri"
    },
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T330",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Cardiology referral ka status batao.",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T331",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral kab expire hoga?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T332",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Kya referral online track ho sakta hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T333",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Agar referral reject ho gaya toh kya karein?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T334",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral ke documents kahan milenge?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T335",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Hospital triage desk ne referral dekh liya kya?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T336",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral triage status kya dikha raha hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T337",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Referral letter download kaise karein?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T338",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "PHC se district hospital referral mein kitna time lagta hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T339",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Doctor ne ECG ke baad referral diya tha, uska status kya hai?",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T340",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Mera active referral card dikhao.",
    "language": "hi",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T341",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Check status of my Cardiology referral.",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T342",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Who is the referring doctor on my referral?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T343",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "What is the priority level of my hospital transfer?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T344",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Show the token assigned by the district hospital.",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T345",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Has the hospital staff triaged my referral?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T346",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Where should I report with my referral token?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T347",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Can I track my referral journey?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T348",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Was my referral sent from PHC Khed?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T349",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Is my referral approved for cardiology consultation?",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T350",
    "category": "Referrals & Hospital Workflows",
    "categoryIndex": 7,
    "utterance": "Explain the referral continuity process.",
    "language": "en",
    "expectedIntent": "REFERRAL_STATUS",
    "expectedEntities": {},
    "backendAction": "patientService.getReferrals",
    "description": "Track hospital referral status, OPD tokens, and triage for patient."
  },
  {
    "id": "T351",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Mere health records dikhao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T352",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Last consultation kab hui thi?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T353",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Doctor ne kya follow-up diya tha?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T354",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Next follow-up kab hai?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T355",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Meri consultation history batao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T356",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Latest medical record dikhao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T357",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Follow-up pending hai kya?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T358",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Doctor ne kaunsi recommendations record ki hain?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T359",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Mere appointments aur records summarize karo.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T360",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Kya mera latest consultation complete hua?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T361",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Show my health records.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T362",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "When was my last medical consultation?",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T363",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "What follow-up checkup did the doctor recommend?",
    "language": "en",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T364",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "When is my next scheduled follow-up?",
    "language": "en",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T365",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Summarize my consultation history.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T366",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Show my latest medical diagnosis record.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T367",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Do I have any pending follow-up checkup?",
    "language": "en",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T368",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "What recommendations did the doctor record?",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T369",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Summarize my health profile and records.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T370",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Is my recent consultation marked complete?",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T371",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Doctor ne kaunsi dawai likhi thi?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T372",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Mera prescription dikhao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T373",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Dawa lene ka time table kya hai?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T374",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Mera blood pressure kitna record hua tha?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T375",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Meri heart rate aur vitals summary batao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T376",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Dr. Ananya Mehta ne kya diagnosis likha tha?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T377",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Follow-up in-person aana hai ya teleconsultation se?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T378",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Follow-up kitne dino baad hai?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T379",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Follow-up ke liye appointment kaise book karun?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T380",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Follow-up instructions kya hain?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T381",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Lab test reports dikhao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T382",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "ECG report ka result kya tha?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T383",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Blood sugar test ki report aayi kya?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T384",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Mera medical report download karo.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T385",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Prescription slip dikhao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T386",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Parchi mein kaun si goli likhi hai?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T387",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Kya doctor ne salt kam khane ki advice di thi?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T388",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Dietary advice aur lifestyle advice kya thi?",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T389",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Mera 30-day follow-up kab due hai?",
    "language": "hi",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T390",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Medical history mein purani bimariyan dikhao.",
    "language": "hi",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T391",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Show doctor prescription notes.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T392",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "What is my prescribed medication dosage?",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T393",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Show my latest recorded blood pressure.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T394",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "What clinical instructions did Dr. Ananya write?",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T395",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Check my 30-day follow-up review status.",
    "language": "en",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T396",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Is follow-up recommended at PHC or District Hospital?",
    "language": "en",
    "expectedIntent": "FOLLOW_UP_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getFollowUps",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: FOLLOW_UP_QUERY."
  },
  {
    "id": "T397",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Show my lab diagnostics results.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T398",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "What was my ECG diagnostic outcome?",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T399",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Show medical recommendations from my doctor.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T400",
    "category": "Health Records & Follow-Ups",
    "categoryIndex": 8,
    "utterance": "Summarize my latest health examination.",
    "language": "en",
    "expectedIntent": "HEALTH_RECORDS",
    "expectedEntities": {},
    "backendAction": "patientService.getHealthRecords",
    "description": "Access patient clinical records, prescriptions, or follow-up milestones: HEALTH_RECORDS."
  },
  {
    "id": "T401",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Teleconsultation start karni hai.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T402",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Doctor ke saath video consultation kaise connect karun?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T403",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Specialist outreach available hai kya?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T404",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Next outreach camp kab hai?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T405",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Cardiology outreach kab scheduled hai?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T406",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Teleconsultation session ka status batao.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T407",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Doctor online hai kya?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T408",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Meri teleconsultation details dikhao.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T409",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Video call connect nahi ho rahi, help karo.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T410",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Kya specialist se remotely consult kar sakta hoon?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T411",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Start my teleconsultation session.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T412",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "How to connect video call with the doctor?",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T413",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Is specialist outreach camp available?",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T414",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "When is the next mobile outreach camp?",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T415",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "When is Cardiology outreach scheduled?",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "speciality": "Cardiology"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T416",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "What is the status of my teleconsult session?",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T417",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Is the doctor online in the consultation room?",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T418",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Show my teleconsultation details.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T419",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "My video call is not connecting, please help.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T420",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Can I consult a specialist remotely?",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T421",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Teleconsultation room kholo.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T422",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Video call par doctor se baat karni hai.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T423",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Kya camera aur microphone permission enable hai?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T424",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Doctor ke aane tak waiting room mein kaise rukun?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T425",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Teleconsultation ka link do.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T426",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Kya teleconsultation mein prescription milta hai?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T427",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Teleconsultation ke liye internet speed kitni chahiye?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T428",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Doctor video call mein kab aayenge?",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T429",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Dr. Ananya Mehta ke saath video consultation shuru karo.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T430",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Dr. Rahul Verma ke saath teleconsultation connect karo.",
    "language": "hi",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Rahul Verma"
    },
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T431",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Khed gaav mein outreach camp kab lagega?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T432",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Chiplun mein mobile medical unit kab aayegi?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "facility": "PHC Chiplun"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T433",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Dapoli mein specialist outreach visit kab hai?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "facility": "PHC Dapoli"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T434",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Guhagar camp mein kitne slots bache hain?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "facility": "PHC Guhagar"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T435",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Pediatrics outreach camp kab scheduled hai?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "speciality": "Pediatrics"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T436",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Orthopedics camp kis tareekh ko hoga?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "speciality": "Orthopedics"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T437",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Gynecology specialist gaav kab aayengi?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "speciality": "Gynecology"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T438",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Outreach camp mein slot book karo.",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T439",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Outreach schedule ka pura calendar dikhao.",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T440",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Kya camp mein ECG aur blood test free hota hai?",
    "language": "hi",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T441",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Open teleconsultation waiting room.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T442",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Check doctor online presence.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T443",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Troubleshoot my WebRTC video connection.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T444",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Connect video call with Dr. Ananya Mehta.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {
      "doctorName": "Dr. Ananya Mehta"
    },
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T445",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "When will the mobile medical van visit my PHC?",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T446",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Specialist outreach camps in Ratnagiri this month.",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T447",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "How many slots remain in Khed cardiology camp?",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {
      "speciality": "Cardiology",
      "facility": "PHC Khed"
    },
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T448",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Book a slot in the upcoming outreach camp.",
    "language": "en",
    "expectedIntent": "OUTREACH_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getOutreachEvents",
    "description": "Teleconsultation session or specialist outreach inquiry: OUTREACH_QUERY."
  },
  {
    "id": "T449",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Can I do video consultation from the local PHC?",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T450",
    "category": "Teleconsultation & Specialist Outreach",
    "categoryIndex": 9,
    "utterance": "Benefits of specialist teleconsultation in rural areas.",
    "language": "en",
    "expectedIntent": "TELECONSULT_QUERY",
    "expectedEntities": {},
    "backendAction": "patientService.getTeleconsultations",
    "description": "Teleconsultation session or specialist outreach inquiry: TELECONSULT_QUERY."
  },
  {
    "id": "T451",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "HealthSure kya hai?",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T452",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Appointment kaise book karte hain?",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T453",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Voice assistant kya-kya kar sakta hai?",
    "language": "hi",
    "expectedIntent": "CAPABILITIES_HELP",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CAPABILITIES_HELP."
  },
  {
    "id": "T454",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Hindi mein baat karo.",
    "language": "hi",
    "expectedIntent": "LANGUAGE_SWITCH",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: LANGUAGE_SWITCH."
  },
  {
    "id": "T455",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "English mein switch karo.",
    "language": "hi",
    "expectedIntent": "LANGUAGE_SWITCH",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: LANGUAGE_SWITCH."
  },
  {
    "id": "T456",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Meri request repeat karo.",
    "language": "hi",
    "expectedIntent": "REPEAT",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: REPEAT."
  },
  {
    "id": "T457",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Maine galat date batayi thi, change karo.",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T458",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Mujhe samajh nahi aaya, simple words mein batao.",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T459",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "HealthSure executive se connect karna hai.",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T460",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Emergency mein SOS option kaise use karte hain?",
    "language": "hi",
    "expectedIntent": "EMERGENCY_SOS",
    "expectedEntities": {},
    "backendAction": "ivrService.dispatchSOS",
    "description": "General platform support, navigation, or conversational control: EMERGENCY_SOS."
  },
  {
    "id": "T461",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "What is HealthSure platform?",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T462",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "How to book an appointment?",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T463",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "What can this voice assistant do?",
    "language": "en",
    "expectedIntent": "CAPABILITIES_HELP",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CAPABILITIES_HELP."
  },
  {
    "id": "T464",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Speak in Hindi.",
    "language": "en",
    "expectedIntent": "LANGUAGE_SWITCH",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: LANGUAGE_SWITCH."
  },
  {
    "id": "T465",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Switch to English language.",
    "language": "en",
    "expectedIntent": "LANGUAGE_SWITCH",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: LANGUAGE_SWITCH."
  },
  {
    "id": "T466",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Please repeat your last statement.",
    "language": "en",
    "expectedIntent": "REPEAT",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: REPEAT."
  },
  {
    "id": "T467",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "I gave the wrong date, please change it.",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T468",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Explain in simpler words please.",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T469",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Connect me with HealthSure human support executive.",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T470",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "How do I use emergency SOS service?",
    "language": "en",
    "expectedIntent": "EMERGENCY_SOS",
    "expectedEntities": {},
    "backendAction": "ivrService.dispatchSOS",
    "description": "General platform support, navigation, or conversational control: EMERGENCY_SOS."
  },
  {
    "id": "T471",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Pichle page par le chalo.",
    "language": "hi",
    "expectedIntent": "GO_BACK",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GO_BACK."
  },
  {
    "id": "T472",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Ek step back jao.",
    "language": "hi",
    "expectedIntent": "GO_BACK",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GO_BACK."
  },
  {
    "id": "T473",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Voice assistant band karo.",
    "language": "hi",
    "expectedIntent": "CLOSE_ASSISTANT",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CLOSE_ASSISTANT."
  },
  {
    "id": "T474",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Modal close kar do.",
    "language": "hi",
    "expectedIntent": "CLOSE_ASSISTANT",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CLOSE_ASSISTANT."
  },
  {
    "id": "T475",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Dashboard kholo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T476",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Mera profile page dikhao.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T477",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Appointments page open karo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T478",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Health records section kholo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T479",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Referrals tracking page par le chalo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T480",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Specialist outreach calendar kholo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T481",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Teleconsultation section open karo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T482",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Emergency SOS section open karo.",
    "language": "hi",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T483",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Go back to previous page.",
    "language": "en",
    "expectedIntent": "GO_BACK",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GO_BACK."
  },
  {
    "id": "T484",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Close voice assistant.",
    "language": "en",
    "expectedIntent": "CLOSE_ASSISTANT",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CLOSE_ASSISTANT."
  },
  {
    "id": "T485",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Open patient dashboard.",
    "language": "en",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T486",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Open my profile page.",
    "language": "en",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T487",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Navigate to appointments page.",
    "language": "en",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T488",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Go to health records.",
    "language": "en",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T489",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Open referrals page.",
    "language": "en",
    "expectedIntent": "APP_NAVIGATION",
    "expectedEntities": {},
    "backendAction": "router.navigate",
    "description": "General platform support, navigation, or conversational control: APP_NAVIGATION."
  },
  {
    "id": "T490",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Emergency! Mujhe turant ambulance chahiye.",
    "language": "hi",
    "expectedIntent": "EMERGENCY_SOS",
    "expectedEntities": {},
    "backendAction": "ivrService.dispatchSOS",
    "description": "General platform support, navigation, or conversational control: EMERGENCY_SOS."
  },
  {
    "id": "T491",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "108 ambulance helpline number kya hai?",
    "language": "hi",
    "expectedIntent": "EMERGENCY_SOS",
    "expectedEntities": {},
    "backendAction": "ivrService.dispatchSOS",
    "description": "General platform support, navigation, or conversational control: EMERGENCY_SOS."
  },
  {
    "id": "T492",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Chest pain ho raha hai madad karo!",
    "language": "hi",
    "expectedIntent": "EMERGENCY_SOS",
    "expectedEntities": {},
    "backendAction": "ivrService.dispatchSOS",
    "description": "General platform support, navigation, or conversational control: EMERGENCY_SOS."
  },
  {
    "id": "T493",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Accident hua hai urgent help chahiye.",
    "language": "hi",
    "expectedIntent": "EMERGENCY_SOS",
    "expectedEntities": {},
    "backendAction": "ivrService.dispatchSOS",
    "description": "General platform support, navigation, or conversational control: EMERGENCY_SOS."
  },
  {
    "id": "T494",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "HealthSure helpline number kya hai?",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T495",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Call HealthSure support desk 08047291536.",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T496",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Explain rural healthcare benefits of HealthSure.",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T497",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "How does ABHA health ID work in HealthSure?",
    "language": "en",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T498",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "ABHA card kaise link karte hain?",
    "language": "hi",
    "expectedIntent": "GENERAL_ASSISTANCE",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: GENERAL_ASSISTANCE."
  },
  {
    "id": "T499",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Aap kaunse languages samajh sakte ho?",
    "language": "hi",
    "expectedIntent": "CAPABILITIES_HELP",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CAPABILITIES_HELP."
  },
  {
    "id": "T500",
    "category": "General Healthcare Assistance & Voice Conversation",
    "categoryIndex": 10,
    "utterance": "Can you understand both Hindi and English?",
    "language": "en",
    "expectedIntent": "CAPABILITIES_HELP",
    "expectedEntities": {},
    "backendAction": "voiceAgent.respond",
    "description": "General platform support, navigation, or conversational control: CAPABILITIES_HELP."
  }
];

export const TASK_CATEGORIES = [
  { index: 1, name: 'Doctor Availability', range: 'T001 - T050', count: 50 },
  { index: 2, name: 'Specialty & Doctor Discovery', range: 'T051 - T100', count: 50 },
  { index: 3, name: 'Appointment Slot Queries', range: 'T101 - T150', count: 50 },
  { index: 4, name: 'Appointment Booking', range: 'T151 - T200', count: 50 },
  { index: 5, name: 'Appointment Management', range: 'T201 - T250', count: 50 },
  { index: 6, name: 'Facilities & Healthcare Access', range: 'T251 - T300', count: 50 },
  { index: 7, name: 'Referrals & Hospital Workflows', range: 'T301 - T350', count: 50 },
  { index: 8, name: 'Health Records & Follow-Ups', range: 'T351 - T400', count: 50 },
  { index: 9, name: 'Teleconsultation & Specialist Outreach', range: 'T401 - T450', count: 50 },
  { index: 10, name: 'General Healthcare Assistance & Voice Conversation', range: 'T451 - T500', count: 50 },
];
