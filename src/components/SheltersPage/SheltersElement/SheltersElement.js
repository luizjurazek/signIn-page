import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Style from "./SheltersElement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GetData from "./GetData";

import ProgressBar from "../../bar/ProgressBar/ProgressBar";

export default function SheltersElement() {
  const [shelters, setShelters] = useState(null);
  const [loading, setLoading] = useState(true);

  async function handleResponse() {
    try {
      const res = await GetData();
      setShelters(res.shelters);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    } finally {
      setLoading(false);
    }
  }

  const navigate = useNavigate(); // Hook para navegação

  const handleShelterClick = (id) => {
    navigate(`/shelter/${id}`); // Redireciona para a página do shelter específico
  };

  useEffect(() => {
    handleResponse();
  }, []);



  return (
    <>
      <div className={Style.container}>
        <div className={Style.sheltersElement}>
          <h1>Shelters</h1>
          <div className={Style.sheltersContainer}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              shelters.map((shelter) => {
                return (
                  <div className={Style.shelter} key={shelter.id} onClick={() => handleShelterClick(shelter.id)}>
                    <div>
                      <h3 className={Style.shelterName}>{shelter.name}</h3>
                      <ProgressBar use={shelter.current_occupancy} limit={shelter.max_capacity} text="Shelter Occupation"/>
                    </div>
                    <div className={Style.containerArrowIcon}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
