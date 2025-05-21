import CollectionList from "@/components/CollectionList";
import SearchInput from "@/components/SearchInput";
import SearchMenu from "@/components/SearchMenu";
import AfterLayout from "@/layouts/AfterLayout";


const Search  = () => {

    return (
        <AfterLayout>               
            <SearchInput />
            <SearchMenu />
            <CollectionList />
        </AfterLayout>
    )
}

export default Search;