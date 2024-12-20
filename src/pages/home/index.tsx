
import SearchForm from '../../components/searchForm';
import { usePokemonListStore } from '../../store/pokemonList';
import PokemonCard from '../../components/PokemonCard'
import ReactLoading from "react-loading"

const HomePage = () => {
  const { pokemon,fetchPokemon } = usePokemonListStore()
  console.log(fetchPokemon)

  return (
    <div className='w-[90%] m-[auto] max-w-[1100px]'>
        <div className='flex justify-center'>
          <img src="/images/logo.webp" 
          className='max-h-[80px] nt-[20px]' 
          alt="" 
          />
        </div>
        <SearchForm />
        {fetchPokemon.loading && (
          <div className='h-[600px] flex justify-center items-center'>
            <ReactLoading type='spin' color="#fff" />
          </div>
        )}       
        {!fetchPokemon.loading && <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px] '>
          {pokemon.data?.map((item)=>{
            return (
              <PokemonCard 
                image={item.image || ''} 
                name={item.name}
                id={item.id}
                types={item.types}/>
            )
          })}
        </div>}
    </div>
  )
}

export default HomePage