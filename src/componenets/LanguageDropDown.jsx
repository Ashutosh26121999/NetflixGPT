// LanguageDropDown.jsx
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LANGUAGES} from "../utils/constentValue";
import {changeLanguage} from "../utils/Redux/userSlice";
import {useTranslation} from "react-i18next";

function LanguageDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const defaultLanguage = useSelector((state) => state?.user?.defaultLanguage); // Store single language
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language, code) => {
    dispatch(changeLanguage({label: language, code: code}));
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className='relative inline-block text-left w-30'>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className='w-full flex justify-between items-center px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-700 hover:bg-gray-800 focus:outline-none'
      >
        {defaultLanguage ? defaultLanguage?.label : t("selectLanguage")}
        <span className='ml-2'>▼</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className='absolute mt-2 w-full bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10'>
          <ul className='py-2'>
            {LANGUAGES.map(({label, code}) => (
              <li
                key={code} // Use 'code' for uniqueness in key
                onClick={() => selectLanguage(label, code)}
                className='flex justify-between items-center px-4 py-2 text-white hover:bg-gray-800 cursor-pointer'
              >
                {label}
                {defaultLanguage.code === code && (
                  <span className='bg-white text-black w-5 h-5 flex items-center justify-center text-base rounded-full'>
                    ✔
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageDropDown;
