import {useTranslation} from "react-i18next";

function GPTSearchBar() {
  const {t} = useTranslation();
  return (
    <div className='flex justify-center items-center h-20 px-4 my-50'>
      {/* Search bar and button for GPT Search */}
      <form className='flex w-full max-w-2xl bg-whiterounded-2xl'>
        <input
          type='text'
          placeholder={t("serchBarPlaceHolder")}
          className='w-full bg-black text-white border  rounded-l-md px-4 py-3 focus:outline-none placeholder-white'
        />
        <button
          type='submit'
          className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-r-md transition duration-300'
        >
          {t("search")}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
