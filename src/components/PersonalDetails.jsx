import { TextInput } from "./TextInput";

function PersonalDetails({ personalForm, setpersonalForm }) {
  function changeFullName(e) {
    setpersonalForm({
      ...personalForm,
      fullName: e.target.value,
    });
  }
  function changeAddress(e) {
    setpersonalForm({
      ...personalForm,
      address: e.target.value,
    });
  }
  function changeContact(e) {
    setpersonalForm({
      ...personalForm,
      contact: e.target.value,
    });
  }
  function changeEmail(e) {
    setpersonalForm({
      ...personalForm,
      email: e.target.value,
    });
  }
  function changeSummary(e) {
    setpersonalForm({
      ...personalForm,
      summary: e.target.value,
    });
  }

  return (
    <>
      <TextInput
        name="Your name"
        type="text"
        handleChange={changeFullName}
        value={personalForm.fullName}
      />
      <TextInput
        name="Address"
        type="text"
        handleChange={changeAddress}
        value={personalForm.address}
      />
      <TextInput
        name="Contact"
        type="text"
        handleChange={changeContact}
        value={personalForm.contact}
      />
      <TextInput
        name="Email"
        type="text"
        handleChange={changeEmail}
        value={personalForm.email}
      />
      <TextInput
        name="Professional Summary"
        type="text"
        handleChange={changeSummary}
        value={personalForm.summary}
      />
    </>
  );
}

export { PersonalDetails };
