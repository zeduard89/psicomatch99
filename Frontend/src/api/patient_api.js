import axios from "axios";

export const registerPatient = async (patient) => {
  return await axios.post("https://name-moeq.onrender.com/patient", patient);
};


export const loginPatient = async (patient) => {
  return await axios.post("https://name-moeq.onrender.com/patient/login", patient);
};

export const loginPatientGoogle = async (newID) => {
  return await axios.post("https://name-moeq.onrender.com/patient/loginGoogle", { id: newID });
};



export const recoverPassword = async (patient) => {
	return await axios.post('https://name-moeq.onrender.com/recoverPass', patient);
}
