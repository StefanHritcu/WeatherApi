import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setCityName, setLat, setLon } from "../store/mainSlice";
import axios from "axios"; // Importa Axios

function Search() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const dispatch = useDispatch();

  // Apri la ricerca
  const handleOpenSearchInput = () => {
    setSearchIsOpen(true);
  };

  // Chiudi la ricerca
  const handleCloseSearchInput = () => {
    setSearchIsOpen(false);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { city } = values;
    try {
      const nominatimResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search`,
        {
          params: {
            q: city,
            format: "json",
            limit: 1,
          },
        }
      );

      if (nominatimResponse.data.length > 0) {
        const { lat, lon } = nominatimResponse.data[0];
        console.log(`Latitudine: ${lat}, Longitudine: ${lon}`);
        dispatch(setCityName(city));
        console.log("nomecitta:", city);

        setSearchIsOpen(false);

        dispatch(setLat(lat));
        dispatch(setLon(lon));
      }
    } catch (error) {
      console.error(
        "Errore durante la richiesta dei paramentri LON e LAT.",
        error
      );
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div className="flex justify-between items-center">
      {/* ICONA DI RICERCA */}
      <div
        className={`absolute top-1 z-20 transition-transform duration-1200 ${
          searchIsOpen ? "right-2" : "left-4"
        }`}
      >
        {searchIsOpen ? (
          <IoMdClose
            className="w-10 h-10 xl:pt-2 xl:w-16 xl:h-16 text-white cursor-pointer"
            onClick={handleCloseSearchInput}
          />
        ) : (
          <CiSearch
            className="w-12 h-12 text-white cursor-pointer"
            onClick={handleOpenSearchInput}
          />
        )}
      </div>

      {/* INPUT */}
      {searchIsOpen && (
        <div className="absolute top-2 left-0 right-0 mx-4 z-10 transition-opacity duration-500">
          <Formik initialValues={{ city: "" }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="flex">
                  <Field
                    placeholder="Inserisci città.."
                    type="text"
                    name="city"
                    className="w-[60vw] rounded-l-2xl pl-4 text-2xl"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-12 h-12 bg-white text-gray-600 cursor-pointer rounded-r-2xl flex items-center justify-center"
                  >
                    <CiSearch className="w-6 h-6" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}

export default Search;
