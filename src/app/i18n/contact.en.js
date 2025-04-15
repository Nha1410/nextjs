export default {
  tag: "_ DO YOU HAVE ANY QUESTIONS?",
  title: "Contact us",
  headline: "Send us a message",
  form: {
    name: "Your full name *",
    email: "Contact email *",
    phone: "Phone number",
    message: "What would you like to discuss? *",
    budget: "Expected Marketing Budget *",
    budgetOptions: [
      { value: "", label: "Select budget range" },
      { value: "under-200m", label: "Under 200 million VND" },
      { value: "200-500m", label: "200 - 500 million VND" },
      { value: "500-1B", label: "500 million - 1 billion VND" },
      { value: "1B+", label: "Over 1 billion VND" }
    ],
    submit: "Submit Request"
  }
};
