import { useState } from "react";
import TranslationIcon from "../../icons/TranslationIcon";

const LanguageSelector = () => {
  let [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    const urls = {
      en: "/",
      es: "/es",
      ja: "/ja",
    };
    if (urls[selectedLanguage]) {
      window.location.href = urls[selectedLanguage];
    }
  };

  return (
    <div>
      <style>
        {`
      .custom-option {
        background-color: #4B1C26;
      }
      `}
      </style>

      <TranslationIcon />
      <select
        id="language"
        name="language"
        className="bg-transparent hover:text-slate-300 transition-opacity duration-300 focus:border-transparent focus:outline-none pr-0 ml-[-60px]"
        value={""}
        onChange={handleChange}
        data-placeholder="Language"
      >
        <option value="" disabled hidden className="custom-option"></option>
        <option value="en" className="custom-option">
          English
        </option>
        <option value="es" className="custom-option">
          Español
        </option>
        <option value="ja" className="custom-option">
          日本語
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
