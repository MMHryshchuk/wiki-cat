import React from 'react'
import {WikiRate} from "../../../components/ui/WikiRate";

export interface IBreed {
    id: string,
    name: string,
    image: string,
    description: string,
    temperament: string,
    origin: string,
    life_span: string,
    adaptability: 0 | 1 | 2 | 3 | 4 | 5,
    affection_level: 0 | 1 | 2 | 3 | 4 | 5,
    child_friendly: 0 | 1 | 2 | 3 | 4 | 5,
    grooming: 0 | 1 | 2 | 3 | 4 | 5,
    intelligence: 0 | 1 | 2 | 3 | 4 | 5,
    health_issues: 0 | 1 | 2 | 3 | 4 | 5,
    social_needs: 0 | 1 | 2 | 3 | 4 | 5,
    stranger_friendly: 0 | 1 | 2 | 3 | 4 | 5,
}

type BreedInformationProps = {
    breed?: IBreed,
}

export const BreedInformation: React.FC<BreedInformationProps> = ({breed}) => {

    return (
        <div className="detail-container">
            <div className="detail__img-wrapper">
                <img className="detail__image" src={breed?.image} alt="breed"/>
            </div>
            <div className="detail__info-wrapper">
                <div className="detail__info-title">{breed?.name}</div>
                <div className="detail__info-text">{breed?.description}</div>
                <div className="detail__info-default">
                    <div className="detail__info-default-text">Temperament:</div>
                    &nbsp; {breed?.temperament}
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-default-text">Origin:</div>
                    &nbsp; {breed?.origin}
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-default-text">Life Span:</div>
                    &nbsp;{breed?.life_span}
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Adaptability:</div>
                    <WikiRate rate={breed?.adaptability ?? 0}/>
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Affection level:</div>
                    <WikiRate rate={breed?.affection_level ?? 0}/>
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Child Friendly:</div>
                    <WikiRate rate={breed?.child_friendly ?? 0}/>
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Grooming:</div>
                    <WikiRate rate={breed?.grooming ?? 0}/>
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Intelligence:</div>
                    <WikiRate rate={breed?.intelligence ?? 0}/>
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Health issues:</div>
                    <WikiRate rate={breed?.health_issues ?? 0}/>
                </div>
                <div className="detail__info-default">
                    <div className="detail__info-rate-text">Social needs:</div>
                    <WikiRate rate={breed?.social_needs ?? 0}/>
                </div>
                <div className="detail__info-default">

                    <div className="detail__info-rate-text">Stranger friendly:</div>
                    <WikiRate rate={breed?.stranger_friendly ?? 0}/>
                </div>
            </div>
        </div>

    )
};