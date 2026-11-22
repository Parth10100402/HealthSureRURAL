/**
 * Comprehensive 500 Unique Healthcare Tasks Generator
 * Generates src/data/voiceTaskCatalogue.ts with T001–T500
 */
const fs = require('fs');

const tasks = [];

function padId(n) {
  return 'T' + String(n).padStart(3, '0');
}

// =========================================================================
// CATEGORY 1: DOCTOR AVAILABILITY — T001–T050
// =========================================================================
const cat1Templates = [
  { u: 'Wednesday ko kaun-kaun se doctors available hain?', lang: 'hi', day: 'Wednesday', act: 'getDoctorsByDay' },
  { u: 'Friday ko available doctors batao.', lang: 'hi', day: 'Friday', act: 'getDoctorsByDay' },
  { u: 'Monday ko Cardiology mein kaun available hai?', lang: 'hi', day: 'Monday', spec: 'Cardiology', act: 'getDoctorsBySpecAndDay' },
  { u: 'Kal kitne doctors available hain?', lang: 'hi', day: 'Tomorrow', act: 'getDoctorsByRelativeDay' },
  { u: 'Next week doctors ka schedule batao.', lang: 'hi', act: 'getWeeklySchedule' },
  { u: 'Sunday ko koi doctor available hai?', lang: 'hi', day: 'Sunday', act: 'getDoctorsByDay' },
  { u: 'Morning mein available doctors dikhao.', lang: 'hi', time: 'Morning', act: 'getDoctorsByTime' },
  { u: '11 baje kaun available hai?', lang: 'hi', time: '11:00 AM', act: 'getDoctorsByTime' },
  { u: 'Kya Dr. Ananya Mehta Friday ko available hain?', lang: 'hi', doc: 'Dr. Ananya Mehta', day: 'Friday', act: 'checkDoctorAvailability' },
  { u: 'Is week sabse zyada doctors kis din available hain?', lang: 'hi', act: 'getPeakAvailabilityDay' },
  { u: 'Show available doctors on Wednesday.', lang: 'en', day: 'Wednesday', act: 'getDoctorsByDay' },
  { u: 'Which doctors are working on Friday?', lang: 'en', day: 'Friday', act: 'getDoctorsByDay' },
  { u: 'Is there any Cardiologist available on Monday?', lang: 'en', day: 'Monday', spec: 'Cardiology', act: 'getDoctorsBySpecAndDay' },
  { u: 'How many doctors are available tomorrow?', lang: 'en', day: 'Tomorrow', act: 'getDoctorsByRelativeDay' },
  { u: 'Show the weekly doctor roster.', lang: 'en', act: 'getWeeklySchedule' },
  { u: 'Are any doctors available on Sunday?', lang: 'en', day: 'Sunday', act: 'getDoctorsByDay' },
  { u: 'List doctors available in the morning.', lang: 'en', time: 'Morning', act: 'getDoctorsByTime' },
  { u: 'Who is available at 11 AM?', lang: 'en', time: '11:00 AM', act: 'getDoctorsByTime' },
  { u: 'Is Dr. Ananya Mehta available this Friday?', lang: 'en', doc: 'Dr. Ananya Mehta', day: 'Friday', act: 'checkDoctorAvailability' },
  { u: 'Which day has the highest doctor availability?', lang: 'en', act: 'getPeakAvailabilityDay' },
  { u: 'Tuesday ko General Medicine ke doctors batao.', lang: 'hi', day: 'Tuesday', spec: 'General Medicine', act: 'getDoctorsBySpecAndDay' },
  { u: 'Thursday ko Pediatrician milenge kya?', lang: 'hi', day: 'Thursday', spec: 'Pediatrics', act: 'getDoctorsBySpecAndDay' },
  { u: 'Saturday ko Dermatology specialist available hain?', lang: 'hi', day: 'Saturday', spec: 'Dermatology', act: 'getDoctorsBySpecAndDay' },
  { u: 'Aaj kaunse doctors OPD mein baithe hain?', lang: 'hi', day: 'Today', act: 'getDoctorsByRelativeDay' },
  { u: 'Parso kaunse doctors aane wale hain?', lang: 'hi', day: 'DayAfterTomorrow', act: 'getDoctorsByRelativeDay' },
  { u: 'Weekend par doctors ka time batao.', lang: 'hi', day: 'Weekend', act: 'getWeekendAvailability' },
  { u: 'Afternoon mein available doctors list karo.', lang: 'hi', time: 'Afternoon', act: 'getDoctorsByTime' },
  { u: 'Evening mein 4 baje doctor milenge?', lang: 'hi', time: '04:00 PM', act: 'getDoctorsByTime' },
  { u: 'Dr. Rahul Verma kis kis din aate hain?', lang: 'hi', doc: 'Dr. Rahul Verma', act: 'checkDoctorAvailability' },
  { u: 'Dr. Priya Nair ka schedule kya hai?', lang: 'hi', doc: 'Dr. Priya Nair', act: 'checkDoctorAvailability' },
  { u: 'Dr. Arjun Kapoor Wednesday ko milenge?', lang: 'hi', doc: 'Dr. Arjun Kapoor', day: 'Wednesday', act: 'checkDoctorAvailability' },
  { u: 'Dr. Neha Sharma kis din OPD karti hain?', lang: 'hi', doc: 'Dr. Neha Sharma', act: 'checkDoctorAvailability' },
  { u: 'Dr. Vivek Rao Orthopedics mein kab milenge?', lang: 'hi', doc: 'Dr. Vivek Rao', spec: 'Orthopedics', act: 'checkDoctorAvailability' },
  { u: 'Dr. Kavita Joshi ENT clinic kab hoti hai?', lang: 'hi', doc: 'Dr. Kavita Joshi', spec: 'ENT', act: 'checkDoctorAvailability' },
  { u: 'Dr. Sameer Khan Neurology checkup ke liye kab hain?', lang: 'hi', doc: 'Dr. Sameer Khan', spec: 'Neurology', act: 'checkDoctorAvailability' },
  { u: 'Dr. Rajesh Patil Khed PHC mein kab aate hain?', lang: 'hi', doc: 'Dr. Rajesh Patil', fac: 'PHC Khed', act: 'checkDoctorAvailability' },
  { u: 'Show ENT doctors available on Monday.', lang: 'en', day: 'Monday', spec: 'ENT', act: 'getDoctorsBySpecAndDay' },
  { u: 'Are there orthopedic doctors on Tuesday?', lang: 'en', day: 'Tuesday', spec: 'Orthopedics', act: 'getDoctorsBySpecAndDay' },
  { u: 'Which gynecologists are available on Wednesday?', lang: 'en', day: 'Wednesday', spec: 'Gynecology', act: 'getDoctorsBySpecAndDay' },
  { u: 'Find pediatricians available on Thursday.', lang: 'en', day: 'Thursday', spec: 'Pediatrics', act: 'getDoctorsBySpecAndDay' },
  { u: 'Can I see a dermatologist on Saturday?', lang: 'en', day: 'Saturday', spec: 'Dermatology', act: 'getDoctorsBySpecAndDay' },
  { u: 'Who is the earliest doctor on Friday?', lang: 'en', day: 'Friday', act: 'getEarliestDoctor' },
  { u: 'Friday ko sabse pehla doctor kaun aayega?', lang: 'hi', day: 'Friday', act: 'getEarliestDoctor' },
  { u: 'Monday subah 09:30 AM par doctor hain?', lang: 'hi', day: 'Monday', time: '09:30 AM', act: 'getDoctorsByTime' },
  { u: 'Wednesday 10 AM par kaunsa specialist hai?', lang: 'hi', day: 'Wednesday', time: '10:00 AM', act: 'getDoctorsByTime' },
  { u: 'Friday dopahar 2 baje doctor checkup ho sakta hai?', lang: 'hi', day: 'Friday', time: '02:00 PM', act: 'getDoctorsByTime' },
  { u: 'Is Dr. Pooja Sawant available for eye checkup this week?', lang: 'en', doc: 'Dr. Pooja Sawant', spec: 'Ophthalmology', act: 'checkDoctorAvailability' },
  { u: 'Dr. Sandeep Gokhale chest specialist kab available hain?', lang: 'hi', doc: 'Dr. Sandeep Gokhale', spec: 'Pulmonology', act: 'checkDoctorAvailability' },
  { u: 'Dr. Meera Chougule psychiatrist kab milengi?', lang: 'hi', doc: 'Dr. Meera Chougule', spec: 'Psychiatry', act: 'checkDoctorAvailability' },
  { u: 'Dr. Deepa Shinde diabetes doctor kab available hain?', lang: 'hi', doc: 'Dr. Deepa Shinde', spec: 'Endocrinology', act: 'checkDoctorAvailability' },
];

for (let i = 0; i < 50; i++) {
  const item = cat1Templates[i];
  tasks.push({
    id: padId(i + 1),
    category: 'Doctor Availability',
    categoryIndex: 1,
    utterance: item.u,
    language: item.lang,
    expectedIntent: 'DOCTOR_AVAILABILITY',
    expectedEntities: {
      day: item.day,
      speciality: item.spec,
      doctorName: item.doc,
      facility: item.fac,
      time: item.time,
    },
    backendAction: 'patientService.getDoctors',
    description: `Query doctor availability for ${item.day || item.doc || item.spec || 'general query'}.`,
  });
}

// =========================================================================
// CATEGORY 2: SPECIALTY & DOCTOR DISCOVERY — T051–T100
// =========================================================================
const cat2Templates = [
  { u: 'Cardiology ke doctors dikhao.', lang: 'hi', spec: 'Cardiology' },
  { u: 'Gynecologist available hai kya?', lang: 'hi', spec: 'Gynecology' },
  { u: 'Best available physician kaun hai?', lang: 'hi', spec: 'General Medicine' },
  { u: 'Pediatrician kis facility mein milenge?', lang: 'hi', spec: 'Pediatrics' },
  { u: 'Skin specialist batao.', lang: 'hi', spec: 'Dermatology' },
  { u: 'Neurology specialist ka schedule dikhao.', lang: 'hi', spec: 'Neurology' },
  { u: 'Dr. Rahul Verma ka profile batao.', lang: 'hi', doc: 'Dr. Rahul Verma' },
  { u: 'Female doctors kaun available hain?', lang: 'hi', filter: 'female' },
  { u: 'Kisi nearby PHC mein doctor available hai?', lang: 'hi', fac: 'PHC' },
  { u: 'Is week orthopedic specialist kab available hain?', lang: 'hi', spec: 'Orthopedics' },
  { u: 'Show all Cardiology specialists.', lang: 'en', spec: 'Cardiology' },
  { u: 'Is there a gynecologist available?', lang: 'en', spec: 'Gynecology' },
  { u: 'Find general physicians near me.', lang: 'en', spec: 'General Medicine' },
  { u: 'Which facility has pediatric doctors?', lang: 'en', spec: 'Pediatrics' },
  { u: 'Show me skin specialists.', lang: 'en', spec: 'Dermatology' },
  { u: 'What is the schedule of neurologists?', lang: 'en', spec: 'Neurology' },
  { u: 'Show Dr. Rahul Verma profile and qualification.', lang: 'en', doc: 'Dr. Rahul Verma' },
  { u: 'List all female doctors.', lang: 'en', filter: 'female' },
  { u: 'Are there doctors at PHC Khed?', lang: 'en', fac: 'PHC Khed' },
  { u: 'When can I consult an orthopedic doctor?', lang: 'en', spec: 'Orthopedics' },
  { u: 'Dil ke doctor ki list dikhao.', lang: 'hi', spec: 'Cardiology' },
  { u: 'Haddi ke doctor kaun hain?', lang: 'hi', spec: 'Orthopedics' },
  { u: 'Kaan naak gale ke specialist doctor batao.', lang: 'hi', spec: 'ENT' },
  { u: 'Dimag ke doctor ki details batao.', lang: 'hi', spec: 'Neurology' },
  { u: 'Aankh ke doctor Ophthalmology mein kaun hain?', lang: 'hi', spec: 'Ophthalmology' },
  { u: 'Saans aur phephde ke specialist Pulmonology dikhao.', lang: 'hi', spec: 'Pulmonology' },
  { u: 'Manasik rog visheshagya Psychiatry specialist kaun hain?', lang: 'hi', spec: 'Psychiatry' },
  { u: 'Sugar aur diabetes ke endocrinologist kaun hain?', lang: 'hi', spec: 'Endocrinology' },
  { u: 'Surgery wale surgeon doctor batao.', lang: 'hi', spec: 'General Surgery' },
  { u: 'Dr. Ananya Mehta ka experience aur hospital batao.', lang: 'hi', doc: 'Dr. Ananya Mehta' },
  { u: 'Dr. Priya Nair ki qualification kya hai?', lang: 'hi', doc: 'Dr. Priya Nair' },
  { u: 'Dr. Arjun Kapoor bacho ke doctor ki details do.', lang: 'hi', doc: 'Dr. Arjun Kapoor', spec: 'Pediatrics' },
  { u: 'Dr. Vivek Rao ka room number aur designation kya hai?', lang: 'hi', doc: 'Dr. Vivek Rao' },
  { u: 'District Hospital Ratnagiri mein kaun kaun se specialists hain?', lang: 'hi', fac: 'District Hospital Ratnagiri' },
  { u: 'District Hospital Pune ke doctors dikhao.', lang: 'hi', fac: 'District Hospital Pune' },
  { u: 'Sawantwadi SDH mein ENT doctor kaun hain?', lang: 'hi', fac: 'Sub-District Hospital Sawantwadi', spec: 'ENT' },
  { u: 'Show doctors who do teleconsultations.', lang: 'en', mode: 'teleconsultation' },
  { u: 'Video call par kaunse doctor milte hain?', lang: 'hi', mode: 'teleconsultation' },
  { u: 'Outreach camps mein kaunse doctors jate hain?', lang: 'hi', mode: 'outreach' },
  { u: 'Dr. Neha Sharma skin clinic timings batao.', lang: 'hi', doc: 'Dr. Neha Sharma', spec: 'Dermatology' },
  { u: 'Dr. Kavita Joshi ENT specialist qualification batao.', lang: 'hi', doc: 'Dr. Kavita Joshi', spec: 'ENT' },
  { u: 'Dr. Sunita Kulkarni gynecologist details dikhao.', lang: 'hi', doc: 'Dr. Sunita Kulkarni', spec: 'Gynecology' },
  { u: 'Dr. Amit Deshmukh heart specialist schedule batao.', lang: 'hi', doc: 'Dr. Amit Deshmukh', spec: 'Cardiology' },
  { u: 'Dr. Sneha Bhonsle pediatrician profile batao.', lang: 'hi', doc: 'Dr. Sneha Bhonsle', spec: 'Pediatrics' },
  { u: 'Dr. Vikram Malhotra ENT surgeon schedule dikhao.', lang: 'hi', doc: 'Dr. Vikram Malhotra', spec: 'ENT' },
  { u: 'Dr. Pooja Sawant eye specialist clinic dikhao.', lang: 'hi', doc: 'Dr. Pooja Sawant', spec: 'Ophthalmology' },
  { u: 'Dr. Sandeep Gokhale pulmonologist clinic batao.', lang: 'hi', doc: 'Dr. Sandeep Gokhale', spec: 'Pulmonology' },
  { u: 'Dr. Meera Chougule psychiatrist schedule dikhao.', lang: 'hi', doc: 'Dr. Meera Chougule', spec: 'Psychiatry' },
  { u: 'Dr. Nitin Kamble general surgeon profile do.', lang: 'hi', doc: 'Dr. Nitin Kamble', spec: 'General Surgery' },
  { u: 'Dr. Deepa Shinde endocrinologist details dikhao.', lang: 'hi', doc: 'Dr. Deepa Shinde', spec: 'Endocrinology' },
];

for (let i = 0; i < 50; i++) {
  const item = cat2Templates[i];
  tasks.push({
    id: padId(51 + i),
    category: 'Specialty & Doctor Discovery',
    categoryIndex: 2,
    utterance: item.u,
    language: item.lang,
    expectedIntent: 'DOCTOR_DISCOVERY',
    expectedEntities: {
      speciality: item.spec,
      doctorName: item.doc,
      facility: item.fac,
      mode: item.mode,
    },
    backendAction: 'patientService.getDoctors',
    description: `Discover specialists or doctor profiles for ${item.spec || item.doc || 'clinical category'}.`,
  });
}

// =========================================================================
// CATEGORY 3: APPOINTMENT SLOT QUERIES — T101–T150
// =========================================================================
const cat3Templates = [
  { u: 'Kal 11 AM ka slot available hai?', lang: 'hi', day: 'Tomorrow', time: '11:00 AM' },
  { u: 'Friday afternoon mein appointment mil sakti hai?', lang: 'hi', day: 'Friday', time: 'Afternoon' },
  { u: 'Dr. Ananya ke available slots batao.', lang: 'hi', doc: 'Dr. Ananya Mehta' },
  { u: '10 AM occupied hai ya available?', lang: 'hi', time: '10:00 AM' },
  { u: 'Next available appointment kab hai?', lang: 'hi', act: 'earliest' },
  { u: 'Kya 2 PM ka slot book ho sakta hai?', lang: 'hi', time: '02:00 PM' },
  { u: 'Ek doctor ke kitne slots available hain?', lang: 'hi', act: 'count' },
  { u: 'Evening appointment possible hai?', lang: 'hi', time: 'Evening' },
  { u: 'Wednesday ko morning slots dikhao.', lang: 'hi', day: 'Wednesday', time: 'Morning' },
  { u: 'Agar mera preferred slot full hai toh alternative batao.', lang: 'hi', act: 'alternative' },
  { u: 'Is 11 AM slot available tomorrow?', lang: 'en', day: 'Tomorrow', time: '11:00 AM' },
  { u: 'Can I get an appointment on Friday afternoon?', lang: 'en', day: 'Friday', time: 'Afternoon' },
  { u: 'Show available time slots for Dr. Ananya.', lang: 'en', doc: 'Dr. Ananya Mehta' },
  { u: 'Is 10 AM slot free or booked?', lang: 'en', time: '10:00 AM' },
  { u: 'When is the next earliest available slot?', lang: 'en', act: 'earliest' },
  { u: 'Can I book a 2 PM slot?', lang: 'en', time: '02:00 PM' },
  { u: 'How many slots are open for this doctor?', lang: 'en', act: 'count' },
  { u: 'Are there any evening slots available?', lang: 'en', time: 'Evening' },
  { u: 'Show Wednesday morning appointment slots.', lang: 'en', day: 'Wednesday', time: 'Morning' },
  { u: 'Suggest alternative time slots if 11 AM is full.', lang: 'en', act: 'alternative' },
  { u: 'Dr. Rahul Verma ke Wednesday ke slots dikhao.', lang: 'hi', doc: 'Dr. Rahul Verma', day: 'Wednesday' },
  { u: 'Dr. Priya Nair ke Friday ke free slots batao.', lang: 'hi', doc: 'Dr. Priya Nair', day: 'Friday' },
  { u: 'Dr. Arjun Kapoor ke subah ke slots kaunse hain?', lang: 'hi', doc: 'Dr. Arjun Kapoor', time: 'Morning' },
  { u: 'Dr. Neha Sharma ke Saturday slots open hain kya?', lang: 'hi', doc: 'Dr. Neha Sharma', day: 'Saturday' },
  { u: 'Dr. Vivek Rao ke 11:30 AM slot ka status batao.', lang: 'hi', doc: 'Dr. Vivek Rao', time: '11:30 AM' },
  { u: 'Dr. Kavita Joshi ke afternoon slots available hain?', lang: 'hi', doc: 'Dr. Kavita Joshi', time: 'Afternoon' },
  { u: 'Dr. Sameer Khan ke 4 baje ka slot khali hai?', lang: 'hi', doc: 'Dr. Sameer Khan', time: '04:00 PM' },
  { u: 'Monday subah 09:30 AM slot open hai kya?', lang: 'hi', day: 'Monday', time: '09:30 AM' },
  { u: 'Wednesday 10:30 AM ka time slot milega?', lang: 'hi', day: 'Wednesday', time: '10:30 AM' },
  { u: 'Friday 12 PM dopahar slot check karo.', lang: 'hi', day: 'Friday', time: '12:00 PM' },
  { u: '12:30 PM ka slot available hai?', lang: 'hi', time: '12:30 PM' },
  { u: '01:30 PM par doctor se mil sakte hain?', lang: 'hi', time: '01:30 PM' },
  { u: '02:30 PM slot open hai ya occupied?', lang: 'hi', time: '02:30 PM' },
  { u: '03:00 PM ka time slot dikhao.', lang: 'hi', time: '03:00 PM' },
  { u: '03:30 PM par checkup slot mil sakta hai?', lang: 'hi', time: '03:30 PM' },
  { u: 'Aaj kitne slots bache hain?', lang: 'hi', day: 'Today', act: 'count' },
  { u: 'Kal subah kitne appointment slots khali hain?', lang: 'hi', day: 'Tomorrow', time: 'Morning', act: 'count' },
  { u: 'Sabse pehla slot kaunsa hai Friday ko?', lang: 'hi', day: 'Friday', act: 'earliest' },
  { u: 'Monday ko earliest appointment kab milegi?', lang: 'hi', day: 'Monday', act: 'earliest' },
  { u: 'Wednesday dopahar ka earliest slot batao.', lang: 'hi', day: 'Wednesday', time: 'Afternoon', act: 'earliest' },
  { u: '11 AM ke aas paas kaunsa slot free hai?', lang: 'hi', time: '11:00 AM', act: 'alternative' },
  { u: 'Agar 10 AM full ho toh agla slot batao.', lang: 'hi', time: '10:00 AM', act: 'alternative' },
  { u: 'Dr. Ananya ke kitne slots bache hain Friday ko?', lang: 'hi', doc: 'Dr. Ananya Mehta', day: 'Friday', act: 'count' },
  { u: 'Dr. Rajesh Patil ke PHC Khed mein slots dikhao.', lang: 'hi', doc: 'Dr. Rajesh Patil', fac: 'PHC Khed' },
  { u: 'Dr. Amit Deshmukh ke teleconsultation slots batao.', lang: 'hi', doc: 'Dr. Amit Deshmukh', mode: 'teleconsultation' },
  { u: 'Show afternoon slots on Monday.', lang: 'en', day: 'Monday', time: 'Afternoon' },
  { u: 'Show morning slots on Tuesday.', lang: 'en', day: 'Tuesday', time: 'Morning' },
  { u: 'Are there open slots at 04:00 PM Friday?', lang: 'en', day: 'Friday', time: '04:00 PM' },
  { u: 'Check slot availability for Dr. Sneha Bhonsle.', lang: 'en', doc: 'Dr. Sneha Bhonsle' },
  { u: 'Can I book an appointment at 10:30 AM today?', lang: 'en', day: 'Today', time: '10:30 AM' },
];

for (let i = 0; i < 50; i++) {
  const item = cat3Templates[i];
  tasks.push({
    id: padId(101 + i),
    category: 'Appointment Slot Queries',
    categoryIndex: 3,
    utterance: item.u,
    language: item.lang,
    expectedIntent: 'APPOINTMENT_SLOT_QUERY',
    expectedEntities: {
      day: item.day,
      time: item.time,
      doctorName: item.doc,
      facility: item.fac,
      mode: item.mode,
    },
    backendAction: 'patientService.getDoctors',
    description: `Check slot availability, timing, or alternative slots for ${item.time || item.day || item.doc || 'appointment query'}.`,
  });
}

// =========================================================================
// CATEGORY 4: APPOINTMENT BOOKING — T151–T200
// =========================================================================
const cat4Templates = [
  { u: 'Mere liye appointment book karo.', lang: 'hi' },
  { u: 'Friday ko Cardiology appointment chahiye.', lang: 'hi', day: 'Friday', spec: 'Cardiology' },
  { u: 'Dr. Ananya ke saath 11 baje appointment book karni hai.', lang: 'hi', doc: 'Dr. Ananya Mehta', time: '11:00 AM' },
  { u: 'Next available slot book karne mein help karo.', lang: 'hi' },
  { u: 'Mere liye morning appointment arrange karo.', lang: 'hi', time: 'Morning' },
  { u: 'Kya appointment confirm ho gayi?', lang: 'hi' },
  { u: 'Appointment details batao.', lang: 'hi' },
  { u: 'Kya main appointment book kar sakta hoon?', lang: 'hi' },
  { u: 'Mujhe doctor select karne mein help karo.', lang: 'hi' },
  { u: 'Available alternative slot suggest karo.', lang: 'hi' },
  { u: 'Book an appointment for me.', lang: 'en' },
  { u: 'I need a Cardiology appointment on Friday.', lang: 'en', day: 'Friday', spec: 'Cardiology' },
  { u: 'Book an appointment with Dr. Ananya at 11 AM.', lang: 'en', doc: 'Dr. Ananya Mehta', time: '11:00 AM' },
  { u: 'Help me book the next available slot.', lang: 'en' },
  { u: 'Arrange a morning appointment for me.', lang: 'en', time: 'Morning' },
  { u: 'Is my appointment confirmed?', lang: 'en' },
  { u: 'Show appointment booking details.', lang: 'en' },
  { u: 'Can I book an appointment right now?', lang: 'en' },
  { u: 'Help me choose a doctor for booking.', lang: 'en' },
  { u: 'Suggest alternative slots for appointment.', lang: 'en' },
  { u: 'Wednesday 10 AM par Dr. Rahul Verma ke saath appointment book karo.', lang: 'hi', day: 'Wednesday', time: '10:00 AM', doc: 'Dr. Rahul Verma' },
  { u: 'Friday subah Dr. Priya Nair ke saath slot book kar do.', lang: 'hi', day: 'Friday', time: 'Morning', doc: 'Dr. Priya Nair' },
  { u: 'Dr. Arjun Kapoor ke saath appointment fix karo.', lang: 'hi', doc: 'Dr. Arjun Kapoor' },
  { u: 'Dr. Neha Sharma ke skin clinic mein appointment book karni hai.', lang: 'hi', doc: 'Dr. Neha Sharma', spec: 'Dermatology' },
  { u: 'Dr. Vivek Rao ke saath kal appointment schedule karo.', lang: 'hi', doc: 'Dr. Vivek Rao', day: 'Tomorrow' },
  { u: 'Dr. Kavita Joshi ke saath ENT consultation book karo.', lang: 'hi', doc: 'Dr. Kavita Joshi', spec: 'ENT' },
  { u: 'Dr. Sameer Khan ke saath Neurology appointment lagao.', lang: 'hi', doc: 'Dr. Sameer Khan', spec: 'Neurology' },
  { u: 'Dr. Rajesh Patil ke saath PHC Khed mein appointment book karo.', lang: 'hi', doc: 'Dr. Rajesh Patil', fac: 'PHC Khed' },
  { u: 'Dr. Sunita Kulkarni ke saath Thursday ko slot book karo.', lang: 'hi', doc: 'Dr. Sunita Kulkarni', day: 'Thursday' },
  { u: 'Dr. Amit Deshmukh ke saath online appointment book karo.', lang: 'hi', doc: 'Dr. Amit Deshmukh', mode: 'teleconsultation' },
  { u: 'General Medicine mein kal subah appointment chahiye.', lang: 'hi', spec: 'General Medicine', day: 'Tomorrow', time: 'Morning' },
  { u: 'Pediatrics mein bachhe ke checkup ke liye slot book karo.', lang: 'hi', spec: 'Pediatrics' },
  { u: 'Orthopedics mein haddi ke doctor ke saath appointment book karo.', lang: 'hi', spec: 'Orthopedics' },
  { u: 'Ophthalmology aankh ke checkup ke liye appointment fix karo.', lang: 'hi', spec: 'Ophthalmology' },
  { u: 'Pulmonology chest doctor ke saath appointment kar do.', lang: 'hi', spec: 'Pulmonology' },
  { u: 'Psychiatry doctor ke saath slot book karna hai.', lang: 'hi', spec: 'Psychiatry' },
  { u: 'General Surgery consultation ke liye appointment book karo.', lang: 'hi', spec: 'General Surgery' },
  { u: 'Endocrinology sugar specialist ke saath appointment chahiye.', lang: 'hi', spec: 'Endocrinology' },
  { u: '11:30 AM ka slot book kar do.', lang: 'hi', time: '11:30 AM' },
  { u: '02:00 PM dopahar ka slot book karo.', lang: 'hi', time: '02:00 PM' },
  { u: '04:00 PM shaam ka time slot book kar do.', lang: 'hi', time: '04:00 PM' },
  { u: 'Friday 09:30 AM ka pehla slot book karo.', lang: 'hi', day: 'Friday', time: '09:30 AM' },
  { u: 'Book Dr. Ananya Mehta Friday 11:00 AM.', lang: 'en', doc: 'Dr. Ananya Mehta', day: 'Friday', time: '11:00 AM' },
  { u: 'Book general physician for tomorrow morning.', lang: 'en', spec: 'General Medicine', day: 'Tomorrow', time: 'Morning' },
  { u: 'Book pediatrics appointment for Wednesday.', lang: 'en', spec: 'Pediatrics', day: 'Wednesday' },
  { u: 'Schedule an appointment with Dr. Vivek Rao.', lang: 'en', doc: 'Dr. Vivek Rao' },
  { u: 'Confirm booking for Dr. Ananya Mehta at 11 AM.', lang: 'en', doc: 'Dr. Ananya Mehta', time: '11:00 AM' },
  { u: 'Haan, appointment confirm kar do.', lang: 'hi', act: 'confirm' },
  { u: 'Yes, please proceed with booking.', lang: 'en', act: 'confirm' },
  { u: 'Nahi, abhi book mat karo cancel kar do.', lang: 'hi', act: 'cancel' },
];

for (let i = 0; i < 50; i++) {
  const item = cat4Templates[i];
  tasks.push({
    id: padId(151 + i),
    category: 'Appointment Booking',
    categoryIndex: 4,
    utterance: item.u,
    language: item.lang,
    expectedIntent: 'BOOK_APPOINTMENT',
    expectedEntities: {
      day: item.day,
      time: item.time,
      doctorName: item.doc,
      speciality: item.spec,
      facility: item.fac,
      mode: item.mode,
    },
    backendAction: 'patientService.bookAppointment',
    description: `Initiate or confirm appointment booking for ${item.doc || item.spec || item.time || 'appointment workflow'}.`,
  });
}

// =========================================================================
// CATEGORY 5: APPOINTMENT MANAGEMENT — T201–T250
// =========================================================================
const cat5Templates = [
  { u: 'Meri next appointment kab hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Mere saare upcoming appointments batao.', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Aaj meri appointment hai kya?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Appointment cancel karni hai.', lang: 'hi', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Friday wali appointment cancel karo.', lang: 'hi', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Meri appointment ka time batao.', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Appointment reschedule karni hai.', lang: 'hi', intent: 'RESCHEDULE_APPOINTMENT' },
  { u: 'Pichhli appointment kab thi?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Appointment kis doctor ke saath hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Meri cancelled appointments dikhao.', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'When is my next appointment?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Show all my upcoming appointments.', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Do I have an appointment today?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'I want to cancel my appointment.', lang: 'en', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Cancel my Friday appointment.', lang: 'en', intent: 'CANCEL_APPOINTMENT' },
  { u: 'What time is my scheduled appointment?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'I need to reschedule my appointment.', lang: 'en', intent: 'RESCHEDULE_APPOINTMENT' },
  { u: 'When was my previous appointment?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Which doctor is my appointment with?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Show my cancelled appointments.', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Meri appointment ka token number kya hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Doctor ka room number kahan hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Kal meri koi appointment hai kya?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Meri Dr. Ananya wali appointment dikhao.', lang: 'hi', intent: 'VIEW_APPOINTMENTS', doc: 'Dr. Ananya Mehta' },
  { u: 'Dr. Rahul Verma wali appointment ka status kya hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS', doc: 'Dr. Rahul Verma' },
  { u: 'Appointment ka din shift kar do.', lang: 'hi', intent: 'RESCHEDULE_APPOINTMENT' },
  { u: 'Appointment ko agle hafte reschedule karo.', lang: 'hi', intent: 'RESCHEDULE_APPOINTMENT' },
  { u: 'Appointment ka time 11 baje se 2 baje badal do.', lang: 'hi', intent: 'RESCHEDULE_APPOINTMENT', time: '02:00 PM' },
  { u: 'Appointment dusre din shift karo.', lang: 'hi', intent: 'RESCHEDULE_APPOINTMENT' },
  { u: 'Friday appointment ko Wednesday kar do.', lang: 'hi', intent: 'RESCHEDULE_APPOINTMENT', day: 'Wednesday' },
  { u: 'Mujhe hospital nahi jana, appointment cancel karo.', lang: 'hi', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Appointment hata do.', lang: 'hi', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Booking delete kar do.', lang: 'hi', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Haan, appointment cancel confirm karo.', lang: 'hi', intent: 'CANCEL_APPOINTMENT', act: 'confirm' },
  { u: 'Nahi, appointment cancel mat karo.', lang: 'hi', intent: 'CANCEL_APPOINTMENT', act: 'abort' },
  { u: 'Meri active bookings list karo.', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Hospital visit se pehle appointment details dikhao.', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Kya meri appointment confirmed status mein hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Meri teleconsultation appointment kis time par hai?', lang: 'hi', intent: 'VIEW_APPOINTMENTS', mode: 'teleconsultation' },
  { u: 'Show token number for my next consultation.', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'What is the clinic room for my appointment?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Reschedule my booking to next week.', lang: 'en', intent: 'RESCHEDULE_APPOINTMENT' },
  { u: 'Shift my appointment time to 2 PM.', lang: 'en', intent: 'RESCHEDULE_APPOINTMENT', time: '02:00 PM' },
  { u: 'Cancel my booked consultation.', lang: 'en', intent: 'CANCEL_APPOINTMENT' },
  { u: 'Confirm appointment cancellation.', lang: 'en', intent: 'CANCEL_APPOINTMENT', act: 'confirm' },
  { u: 'Show my past completed appointments.', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Do I have any appointment this Saturday?', lang: 'en', intent: 'VIEW_APPOINTMENTS', day: 'Saturday' },
  { u: 'Is my consultation in-person or online?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Where do I need to go for my appointment?', lang: 'en', intent: 'VIEW_APPOINTMENTS' },
  { u: 'Meri sabhi appointments ki summary dikhao.', lang: 'hi', intent: 'VIEW_APPOINTMENTS' },
];

for (let i = 0; i < 50; i++) {
  const item = cat5Templates[i];
  tasks.push({
    id: padId(201 + i),
    category: 'Appointment Management',
    categoryIndex: 5,
    utterance: item.u,
    language: item.lang,
    expectedIntent: item.intent,
    expectedEntities: {
      day: item.day,
      time: item.time,
      doctorName: item.doc,
      mode: item.mode,
    },
    backendAction: item.intent === 'CANCEL_APPOINTMENT' ? 'patientService.cancelAppointment' : (item.intent === 'RESCHEDULE_APPOINTMENT' ? 'patientService.rescheduleAppointment' : 'patientService.getAppointments'),
    description: `Manage patient appointment: ${item.intent} (${item.u}).`,
  });
}

// =========================================================================
// CATEGORY 6: FACILITIES & HEALTHCARE ACCESS — T251–T300
// =========================================================================
const cat6Templates = [
  { u: 'Nearby PHC kaun sa hai?', lang: 'hi' },
  { u: 'District hospital ka address batao.', lang: 'hi', fac: 'District Hospital Ratnagiri' },
  { u: 'Khed PHC mein kaun available hai?', lang: 'hi', fac: 'PHC Khed' },
  { u: 'Kis facility mein specialist milenge?', lang: 'hi' },
  { u: 'PHC aur CHC mein kya difference hai?', lang: 'hi' },
  { u: 'Kis hospital mein Cardiology available hai?', lang: 'hi', spec: 'Cardiology' },
  { u: 'Facility timings batao.', lang: 'hi' },
  { u: 'Available healthcare centres list karo.', lang: 'hi' },
  { u: 'Nearest specialist facility kaunsi hai?', lang: 'hi' },
  { u: 'Hospital referral kaise process hota hai?', lang: 'hi' },
  { u: 'Which is the nearest PHC?', lang: 'en' },
  { u: 'Give me the address of District Hospital Ratnagiri.', lang: 'en', fac: 'District Hospital Ratnagiri' },
  { u: 'Who is available at Khed PHC?', lang: 'en', fac: 'PHC Khed' },
  { u: 'Which hospital has specialist doctors?', lang: 'en' },
  { u: 'What is the difference between PHC and CHC?', lang: 'en' },
  { u: 'Which hospital provides Cardiology services?', lang: 'en', spec: 'Cardiology' },
  { u: 'What are the operating hours of health facilities?', lang: 'en' },
  { u: 'List all available government health centres.', lang: 'en' },
  { u: 'What is the nearest referral facility?', lang: 'en' },
  { u: 'How does hospital referral work in HealthSure?', lang: 'en' },
  { u: 'PHC Chiplun ka contact phone number kya hai?', lang: 'hi', fac: 'PHC Chiplun' },
  { u: 'PHC Dapoli kahan par sthit hai?', lang: 'hi', fac: 'PHC Dapoli' },
  { u: 'PHC Guhagar ke timings kya hain?', lang: 'hi', fac: 'PHC Guhagar' },
  { u: 'District Hospital Pune ka phone number do.', lang: 'hi', fac: 'District Hospital Pune' },
  { u: 'Sub-District Hospital Sawantwadi kis district mein hai?', lang: 'hi', fac: 'Sub-District Hospital Sawantwadi' },
  { u: 'Emergency case mein PHC jaana chahiye ya District Hospital?', lang: 'hi' },
  { u: 'PHC mein OPD timings kya hoti hain?', lang: 'hi' },
  { u: 'District hospital mein OPD timings kya hain?', lang: 'hi' },
  { u: 'Sub-district hospital SDH ka kya kaam hai?', lang: 'hi' },
  { u: 'Mera primary health centre kaun sa hai?', lang: 'hi' },
  { u: 'Khed taluka mein kaun si health facilities hain?', lang: 'hi', fac: 'PHC Khed' },
  { u: 'Ratnagiri district ke government hospitals batao.', lang: 'hi', fac: 'District Hospital Ratnagiri' },
  { u: 'Kis facility mein X-ray aur blood test lab hai?', lang: 'hi' },
  { u: 'PHC par basic dawaiyan milti hain kya?', lang: 'hi' },
  { u: 'PHC ambulance availability kya hai?', lang: 'hi' },
  { u: 'Emergency ward kis hospital mein 24 ghante khula hai?', lang: 'hi' },
  { u: 'ICU facility kis hospital mein uplabdh hai?', lang: 'hi' },
  { u: 'Specialist doctors kis hospital mein baithte hain?', lang: 'hi' },
  { u: 'PHC Khed ka contact number batao.', lang: 'hi', fac: 'PHC Khed' },
  { u: 'Show all facilities in Ratnagiri district.', lang: 'en', fac: 'District Hospital Ratnagiri' },
  { u: 'Contact number for District Hospital Pune.', lang: 'en', fac: 'District Hospital Pune' },
  { u: 'Services available at Sawantwadi Sub-District Hospital.', lang: 'en', fac: 'Sub-District Hospital Sawantwadi' },
  { u: 'Is emergency service 24x7 at District Hospital?', lang: 'en' },
  { u: 'Where can I get specialized heart care?', lang: 'en', spec: 'Cardiology' },
  { u: 'Where are pediatric ICU facilities available?', lang: 'en', spec: 'Pediatrics' },
  { u: 'Health facilities in Chiplun taluka.', lang: 'en', fac: 'PHC Chiplun' },
  { u: 'Does PHC Dapoli have maternal care?', lang: 'en', fac: 'PHC Dapoli' },
  { u: 'Guhagar PHC operational status.', lang: 'en', fac: 'PHC Guhagar' },
  { u: 'Nearest government hospital from my village.', lang: 'en' },
  { u: 'HealthSure network facilities list dikhao.', lang: 'hi' },
];

for (let i = 0; i < 50; i++) {
  const item = cat6Templates[i];
  tasks.push({
    id: padId(251 + i),
    category: 'Facilities & Healthcare Access',
    categoryIndex: 6,
    utterance: item.u,
    language: item.lang,
    expectedIntent: 'FACILITIES_ACCESS',
    expectedEntities: {
      facility: item.fac,
      speciality: item.spec,
    },
    backendAction: 'patientService.getFacilities',
    description: `Lookup healthcare facilities, timings, services, or comparisons for ${item.fac || item.spec || 'network facilities'}.`,
  });
}

// =========================================================================
// CATEGORY 7: REFERRALS & HOSPITAL WORKFLOWS — T301–T350
// =========================================================================
const cat7Templates = [
  { u: 'Mera referral status kya hai?', lang: 'hi' },
  { u: 'Referral accept hua kya?', lang: 'hi' },
  { u: 'Referral kis hospital ko bheja gaya?', lang: 'hi' },
  { u: 'Hospital ne referral receive kiya?', lang: 'hi' },
  { u: 'OPD token generate hua kya?', lang: 'hi' },
  { u: 'Mera OPD token number batao.', lang: 'hi' },
  { u: 'Referral pending kyun hai?', lang: 'hi' },
  { u: 'Specialist referral kaise milega?', lang: 'hi' },
  { u: 'Doctor referral create kar sakte hain?', lang: 'hi' },
  { u: 'Referral history dikhao.', lang: 'hi' },
  { u: 'What is my referral status?', lang: 'en' },
  { u: 'Has my hospital referral been accepted?', lang: 'en' },
  { u: 'Which hospital was my referral sent to?', lang: 'en' },
  { u: 'Did the hospital receive my referral?', lang: 'en' },
  { u: 'Is my OPD token generated?', lang: 'en' },
  { u: 'What is my OPD token number?', lang: 'en' },
  { u: 'Why is my referral currently pending?', lang: 'en' },
  { u: 'How can I get a specialist referral?', lang: 'en' },
  { u: 'Can the PHC doctor create a referral for me?', lang: 'en' },
  { u: 'Show my referral history.', lang: 'en' },
  { u: 'Mera referral kis doctor ne banaya tha?', lang: 'hi' },
  { u: 'Referral ki priority kya hai?', lang: 'hi' },
  { u: 'Kya mera referral urgent priority par hai?', lang: 'hi' },
  { u: 'Referral accept hone ke baad kya karna hai?', lang: 'hi' },
  { u: 'Hospital mein OPD token kahan dikhana hai?', lang: 'hi' },
  { u: 'Referral token lekar kis counter par jana hai?', lang: 'hi' },
  { u: 'Mera referral ID number kya hai?', lang: 'hi' },
  { u: 'Referral kis bimari ya reason ke liye banaya gaya tha?', lang: 'hi' },
  { u: 'Kya mujhe District Hospital Ratnagiri refer kiya gaya hai?', lang: 'hi', fac: 'District Hospital Ratnagiri' },
  { u: 'Cardiology referral ka status batao.', lang: 'hi', spec: 'Cardiology' },
  { u: 'Referral kab expire hoga?', lang: 'hi' },
  { u: 'Kya referral online track ho sakta hai?', lang: 'hi' },
  { u: 'Agar referral reject ho gaya toh kya karein?', lang: 'hi' },
  { u: 'Referral ke documents kahan milenge?', lang: 'hi' },
  { u: 'Hospital triage desk ne referral dekh liya kya?', lang: 'hi' },
  { u: 'Referral triage status kya dikha raha hai?', lang: 'hi' },
  { u: 'Referral letter download kaise karein?', lang: 'hi' },
  { u: 'PHC se district hospital referral mein kitna time lagta hai?', lang: 'hi' },
  { u: 'Doctor ne ECG ke baad referral diya tha, uska status kya hai?', lang: 'hi' },
  { u: 'Mera active referral card dikhao.', lang: 'hi' },
  { u: 'Check status of my Cardiology referral.', lang: 'en', spec: 'Cardiology' },
  { u: 'Who is the referring doctor on my referral?', lang: 'en' },
  { u: 'What is the priority level of my hospital transfer?', lang: 'en' },
  { u: 'Show the token assigned by the district hospital.', lang: 'en' },
  { u: 'Has the hospital staff triaged my referral?', lang: 'en' },
  { u: 'Where should I report with my referral token?', lang: 'en' },
  { u: 'Can I track my referral journey?', lang: 'en' },
  { u: 'Was my referral sent from PHC Khed?', lang: 'en', fac: 'PHC Khed' },
  { u: 'Is my referral approved for cardiology consultation?', lang: 'en', spec: 'Cardiology' },
  { u: 'Explain the referral continuity process.', lang: 'en' },
];

for (let i = 0; i < 50; i++) {
  const item = cat7Templates[i];
  tasks.push({
    id: padId(301 + i),
    category: 'Referrals & Hospital Workflows',
    categoryIndex: 7,
    utterance: item.u,
    language: item.lang,
    expectedIntent: 'REFERRAL_STATUS',
    expectedEntities: {
      facility: item.fac,
      speciality: item.spec,
    },
    backendAction: 'patientService.getReferrals',
    description: `Track hospital referral status, OPD tokens, and triage for patient.`,
  });
}

// =========================================================================
// CATEGORY 8: HEALTH RECORDS & FOLLOW-UPS — T351–T400
// =========================================================================
const cat8Templates = [
  { u: 'Mere health records dikhao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Last consultation kab hui thi?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Doctor ne kya follow-up diya tha?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Next follow-up kab hai?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Meri consultation history batao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Latest medical record dikhao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Follow-up pending hai kya?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Doctor ne kaunsi recommendations record ki hain?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Mere appointments aur records summarize karo.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Kya mera latest consultation complete hua?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Show my health records.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'When was my last medical consultation?', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'What follow-up checkup did the doctor recommend?', lang: 'en', intent: 'FOLLOW_UP_QUERY' },
  { u: 'When is my next scheduled follow-up?', lang: 'en', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Summarize my consultation history.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Show my latest medical diagnosis record.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Do I have any pending follow-up checkup?', lang: 'en', intent: 'FOLLOW_UP_QUERY' },
  { u: 'What recommendations did the doctor record?', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Summarize my health profile and records.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Is my recent consultation marked complete?', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Doctor ne kaunsi dawai likhi thi?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Mera prescription dikhao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Dawa lene ka time table kya hai?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Mera blood pressure kitna record hua tha?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Meri heart rate aur vitals summary batao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Dr. Ananya Mehta ne kya diagnosis likha tha?', lang: 'hi', intent: 'HEALTH_RECORDS', doc: 'Dr. Ananya Mehta' },
  { u: 'Follow-up in-person aana hai ya teleconsultation se?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Follow-up kitne dino baad hai?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Follow-up ke liye appointment kaise book karun?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Follow-up instructions kya hain?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Lab test reports dikhao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'ECG report ka result kya tha?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Blood sugar test ki report aayi kya?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Mera medical report download karo.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Prescription slip dikhao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Parchi mein kaun si goli likhi hai?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Kya doctor ne salt kam khane ki advice di thi?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Dietary advice aur lifestyle advice kya thi?', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Mera 30-day follow-up kab due hai?', lang: 'hi', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Medical history mein purani bimariyan dikhao.', lang: 'hi', intent: 'HEALTH_RECORDS' },
  { u: 'Show doctor prescription notes.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'What is my prescribed medication dosage?', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Show my latest recorded blood pressure.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'What clinical instructions did Dr. Ananya write?', lang: 'en', intent: 'HEALTH_RECORDS', doc: 'Dr. Ananya Mehta' },
  { u: 'Check my 30-day follow-up review status.', lang: 'en', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Is follow-up recommended at PHC or District Hospital?', lang: 'en', intent: 'FOLLOW_UP_QUERY' },
  { u: 'Show my lab diagnostics results.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'What was my ECG diagnostic outcome?', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Show medical recommendations from my doctor.', lang: 'en', intent: 'HEALTH_RECORDS' },
  { u: 'Summarize my latest health examination.', lang: 'en', intent: 'HEALTH_RECORDS' },
];

for (let i = 0; i < 50; i++) {
  const item = cat8Templates[i];
  tasks.push({
    id: padId(351 + i),
    category: 'Health Records & Follow-Ups',
    categoryIndex: 8,
    utterance: item.u,
    language: item.lang,
    expectedIntent: item.intent,
    expectedEntities: {
      doctorName: item.doc,
    },
    backendAction: item.intent === 'FOLLOW_UP_QUERY' ? 'patientService.getFollowUps' : 'patientService.getHealthRecords',
    description: `Access patient clinical records, prescriptions, or follow-up milestones: ${item.intent}.`,
  });
}

// =========================================================================
// CATEGORY 9: TELECONSULTATION & SPECIALIST OUTREACH — T401–T450
// =========================================================================
const cat9Templates = [
  { u: 'Teleconsultation start karni hai.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Doctor ke saath video consultation kaise connect karun?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Specialist outreach available hai kya?', lang: 'hi', intent: 'OUTREACH_QUERY' },
  { u: 'Next outreach camp kab hai?', lang: 'hi', intent: 'OUTREACH_QUERY' },
  { u: 'Cardiology outreach kab scheduled hai?', lang: 'hi', intent: 'OUTREACH_QUERY', spec: 'Cardiology' },
  { u: 'Teleconsultation session ka status batao.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Doctor online hai kya?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Meri teleconsultation details dikhao.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Video call connect nahi ho rahi, help karo.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Kya specialist se remotely consult kar sakta hoon?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Start my teleconsultation session.', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'How to connect video call with the doctor?', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Is specialist outreach camp available?', lang: 'en', intent: 'OUTREACH_QUERY' },
  { u: 'When is the next mobile outreach camp?', lang: 'en', intent: 'OUTREACH_QUERY' },
  { u: 'When is Cardiology outreach scheduled?', lang: 'en', intent: 'OUTREACH_QUERY', spec: 'Cardiology' },
  { u: 'What is the status of my teleconsult session?', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Is the doctor online in the consultation room?', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Show my teleconsultation details.', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'My video call is not connecting, please help.', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Can I consult a specialist remotely?', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Teleconsultation room kholo.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Video call par doctor se baat karni hai.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Kya camera aur microphone permission enable hai?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Doctor ke aane tak waiting room mein kaise rukun?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Teleconsultation ka link do.', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Kya teleconsultation mein prescription milta hai?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Teleconsultation ke liye internet speed kitni chahiye?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Doctor video call mein kab aayenge?', lang: 'hi', intent: 'TELECONSULT_QUERY' },
  { u: 'Dr. Ananya Mehta ke saath video consultation shuru karo.', lang: 'hi', intent: 'TELECONSULT_QUERY', doc: 'Dr. Ananya Mehta' },
  { u: 'Dr. Rahul Verma ke saath teleconsultation connect karo.', lang: 'hi', intent: 'TELECONSULT_QUERY', doc: 'Dr. Rahul Verma' },
  { u: 'Khed gaav mein outreach camp kab lagega?', lang: 'hi', intent: 'OUTREACH_QUERY', fac: 'PHC Khed' },
  { u: 'Chiplun mein mobile medical unit kab aayegi?', lang: 'hi', intent: 'OUTREACH_QUERY', fac: 'PHC Chiplun' },
  { u: 'Dapoli mein specialist outreach visit kab hai?', lang: 'hi', intent: 'OUTREACH_QUERY', fac: 'PHC Dapoli' },
  { u: 'Guhagar camp mein kitne slots bache hain?', lang: 'hi', intent: 'OUTREACH_QUERY', fac: 'PHC Guhagar' },
  { u: 'Pediatrics outreach camp kab scheduled hai?', lang: 'hi', intent: 'OUTREACH_QUERY', spec: 'Pediatrics' },
  { u: 'Orthopedics camp kis tareekh ko hoga?', lang: 'hi', intent: 'OUTREACH_QUERY', spec: 'Orthopedics' },
  { u: 'Gynecology specialist gaav kab aayengi?', lang: 'hi', intent: 'OUTREACH_QUERY', spec: 'Gynecology' },
  { u: 'Outreach camp mein slot book karo.', lang: 'hi', intent: 'OUTREACH_QUERY' },
  { u: 'Outreach schedule ka pura calendar dikhao.', lang: 'hi', intent: 'OUTREACH_QUERY' },
  { u: 'Kya camp mein ECG aur blood test free hota hai?', lang: 'hi', intent: 'OUTREACH_QUERY' },
  { u: 'Open teleconsultation waiting room.', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Check doctor online presence.', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Troubleshoot my WebRTC video connection.', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Connect video call with Dr. Ananya Mehta.', lang: 'en', intent: 'TELECONSULT_QUERY', doc: 'Dr. Ananya Mehta' },
  { u: 'When will the mobile medical van visit my PHC?', lang: 'en', intent: 'OUTREACH_QUERY' },
  { u: 'Specialist outreach camps in Ratnagiri this month.', lang: 'en', intent: 'OUTREACH_QUERY' },
  { u: 'How many slots remain in Khed cardiology camp?', lang: 'en', intent: 'OUTREACH_QUERY', fac: 'PHC Khed', spec: 'Cardiology' },
  { u: 'Book a slot in the upcoming outreach camp.', lang: 'en', intent: 'OUTREACH_QUERY' },
  { u: 'Can I do video consultation from the local PHC?', lang: 'en', intent: 'TELECONSULT_QUERY' },
  { u: 'Benefits of specialist teleconsultation in rural areas.', lang: 'en', intent: 'TELECONSULT_QUERY' },
];

for (let i = 0; i < 50; i++) {
  const item = cat9Templates[i];
  tasks.push({
    id: padId(401 + i),
    category: 'Teleconsultation & Specialist Outreach',
    categoryIndex: 9,
    utterance: item.u,
    language: item.lang,
    expectedIntent: item.intent,
    expectedEntities: {
      speciality: item.spec,
      doctorName: item.doc,
      facility: item.fac,
    },
    backendAction: item.intent === 'OUTREACH_QUERY' ? 'patientService.getOutreachEvents' : 'patientService.getTeleconsultations',
    description: `Teleconsultation session or specialist outreach inquiry: ${item.intent}.`,
  });
}

// =========================================================================
// CATEGORY 10: GENERAL HEALTHCARE ASSISTANCE & VOICE CONVERSATION — T451–T500
// =========================================================================
const cat10Templates = [
  { u: 'HealthSure kya hai?', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Appointment kaise book karte hain?', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Voice assistant kya-kya kar sakta hai?', lang: 'hi', intent: 'CAPABILITIES_HELP' },
  { u: 'Hindi mein baat karo.', lang: 'hi', intent: 'LANGUAGE_SWITCH' },
  { u: 'English mein switch karo.', lang: 'hi', intent: 'LANGUAGE_SWITCH' },
  { u: 'Meri request repeat karo.', lang: 'hi', intent: 'REPEAT' },
  { u: 'Maine galat date batayi thi, change karo.', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Mujhe samajh nahi aaya, simple words mein batao.', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'HealthSure executive se connect karna hai.', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Emergency mein SOS option kaise use karte hain?', lang: 'hi', intent: 'EMERGENCY_SOS' },
  { u: 'What is HealthSure platform?', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'How to book an appointment?', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'What can this voice assistant do?', lang: 'en', intent: 'CAPABILITIES_HELP' },
  { u: 'Speak in Hindi.', lang: 'en', intent: 'LANGUAGE_SWITCH' },
  { u: 'Switch to English language.', lang: 'en', intent: 'LANGUAGE_SWITCH' },
  { u: 'Please repeat your last statement.', lang: 'en', intent: 'REPEAT' },
  { u: 'I gave the wrong date, please change it.', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Explain in simpler words please.', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Connect me with HealthSure human support executive.', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'How do I use emergency SOS service?', lang: 'en', intent: 'EMERGENCY_SOS' },
  { u: 'Pichle page par le chalo.', lang: 'hi', intent: 'GO_BACK' },
  { u: 'Ek step back jao.', lang: 'hi', intent: 'GO_BACK' },
  { u: 'Voice assistant band karo.', lang: 'hi', intent: 'CLOSE_ASSISTANT' },
  { u: 'Modal close kar do.', lang: 'hi', intent: 'CLOSE_ASSISTANT' },
  { u: 'Dashboard kholo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Mera profile page dikhao.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Appointments page open karo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Health records section kholo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Referrals tracking page par le chalo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Specialist outreach calendar kholo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Teleconsultation section open karo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Emergency SOS section open karo.', lang: 'hi', intent: 'APP_NAVIGATION' },
  { u: 'Go back to previous page.', lang: 'en', intent: 'GO_BACK' },
  { u: 'Close voice assistant.', lang: 'en', intent: 'CLOSE_ASSISTANT' },
  { u: 'Open patient dashboard.', lang: 'en', intent: 'APP_NAVIGATION' },
  { u: 'Open my profile page.', lang: 'en', intent: 'APP_NAVIGATION' },
  { u: 'Navigate to appointments page.', lang: 'en', intent: 'APP_NAVIGATION' },
  { u: 'Go to health records.', lang: 'en', intent: 'APP_NAVIGATION' },
  { u: 'Open referrals page.', lang: 'en', intent: 'APP_NAVIGATION' },
  { u: 'Emergency! Mujhe turant ambulance chahiye.', lang: 'hi', intent: 'EMERGENCY_SOS' },
  { u: '108 ambulance helpline number kya hai?', lang: 'hi', intent: 'EMERGENCY_SOS' },
  { u: 'Chest pain ho raha hai madad karo!', lang: 'hi', intent: 'EMERGENCY_SOS' },
  { u: 'Accident hua hai urgent help chahiye.', lang: 'hi', intent: 'EMERGENCY_SOS' },
  { u: 'HealthSure helpline number kya hai?', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Call HealthSure support desk 07314624692.', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Explain rural healthcare benefits of HealthSure.', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'How does ABHA health ID work in HealthSure?', lang: 'en', intent: 'GENERAL_ASSISTANCE' },
  { u: 'ABHA card kaise link karte hain?', lang: 'hi', intent: 'GENERAL_ASSISTANCE' },
  { u: 'Aap kaunse languages samajh sakte ho?', lang: 'hi', intent: 'CAPABILITIES_HELP' },
  { u: 'Can you understand both Hindi and English?', lang: 'en', intent: 'CAPABILITIES_HELP' },
];

for (let i = 0; i < 50; i++) {
  const item = cat10Templates[i];
  tasks.push({
    id: padId(451 + i),
    category: 'General Healthcare Assistance & Voice Conversation',
    categoryIndex: 10,
    utterance: item.u,
    language: item.lang,
    expectedIntent: item.intent,
    expectedEntities: {},
    backendAction: item.intent === 'EMERGENCY_SOS' ? 'ivrService.dispatchSOS' : (item.intent === 'APP_NAVIGATION' ? 'router.navigate' : 'voiceAgent.respond'),
    description: `General platform support, navigation, or conversational control: ${item.intent}.`,
  });
}

// Generate the TypeScript file
const fileContent = `/**
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

export const VOICE_TASK_CATALOGUE: VoiceTaskScenario[] = ${JSON.stringify(tasks, null, 2)};

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
`;

fs.writeFileSync('src/data/voiceTaskCatalogue.ts', fileContent);
console.log(`Successfully generated src/data/voiceTaskCatalogue.ts with ${tasks.length} tasks!`);
