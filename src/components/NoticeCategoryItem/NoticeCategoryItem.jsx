import {
    NoticeCategoryItemStyled,
    CardInfoContainer,
    Title,
    Photo,
    Category,
    AddToFavoriteBtn,
    // RemoveFromFavoriteBtn,
    CardDetailsContainer,
    CardImageContainer,
    CardDetailInfo,
    Button
} from "./NoticeCategoryItem.styled";
import { ReactComponent as AddIcon } from "../icons/add.svg";
// import { ReactComponent as RemoveIcon } from "../icons/remove.svg";

let category = '';
let photo;

export const NoticeCategoryItem = ({ notice }) => {
    switch (notice.category) {
        case 'sell':
            category = 'Sell';
            break;
        case 'lost-found':
            category = 'Lost/found';
            break;
        case 'in good hands':
            category = 'In good hands';
            break;
        // eslint-disable-next-line no-unused-expressions
        default: '';
    };

    if (notice.photo) {
        photo = `https://team-api-blended2.herokuapp.com/${notice.photo}`;
    } else {
        photo = 'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
    };

    return (
        <NoticeCategoryItemStyled>
            <CardImageContainer>
                <Photo src={photo} alt={notice.comments} />
                <Category>{category}</Category>
                <AddToFavoriteBtn>
                    <AddIcon width="24" height="22" />
                </AddToFavoriteBtn>
                {/* <RemoveFromFavoriteBtn>
                    <RemoveIcon width="19.5" height="21" />
                </RemoveFromFavoriteBtn> */}
            </CardImageContainer>
            <CardInfoContainer>
                <Title>{notice.title}</Title>
                <CardDetailsContainer>
                    <li>
                        <CardDetailInfo>Breed:</CardDetailInfo>
                        <CardDetailInfo>Place:</CardDetailInfo>
                        <CardDetailInfo>Age:</CardDetailInfo>
                    </li>
                    <li>
                        <CardDetailInfo>{notice.breed}</CardDetailInfo>
                        <CardDetailInfo>{notice.place}</CardDetailInfo>
                        <CardDetailInfo>{notice.age}</CardDetailInfo>
                    </li>
                </CardDetailsContainer>
            </CardInfoContainer>
            <Button type="button">Learn more</Button>
        </NoticeCategoryItemStyled>
    );
};