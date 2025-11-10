import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSearch: (topic: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = (formData.get("topic") as string).trim();

    if (topic === "") {
      alert("Please input keyword");
      return;
    }

    onSearch(topic);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input type="text" name="topic" className={css.input} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
