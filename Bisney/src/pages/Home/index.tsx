import { NewCinema } from '@/components/NewCinema';
import  {home , logo} from './styles.css';

const Home  = () => {
    return (
        <>
            <div className={home}>
                <h2 className={logo}>
                    {/* <img className={img} src={`/logo/original.png`} alt="Disney+" /> */}
                </h2>
                {/* 최신/인기 슬라이드 */}
                <NewCinema/>
                {/* diseny,pixar ,marvel,starwars,nationalgeographic,star 채널 버튼 */}
                {/* 오늘밤 뭐볼까 추천 아이템 나열 슬라이드  디자인 1 - 작은사이즈*/}
                {/* 디즈니+ 최신작 아이템 나열 슬라이드 디자인 1 - 작은사이즈*/}
                {/* 시청중인콘텐츠 */}
                {/* 미드 마니아 정주행 추천작 아이템 나열 슬라이드 디자인 2 - 큰사이즈*/}



            </div>

        </>
    )
}

export default Home;