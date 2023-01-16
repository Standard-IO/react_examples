import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card'
import rawdata from './data'

const data = rawdata.map(item => {
  return (
  // <Card
  //   key={item.id}
  //   online={item.location}
  //   openSpots={item.openSpots}
  //   img={item.coverImg}
  //   rating={item.stats.rating}
  //   reviewCount={item.stats.reviewCount}
  //   location={item.location}
  //   title={item.title}
  //   price={item.price}
  // />

  <Card
  key={item.id}
  {...item}
  />
  )
});

function App() {
  return (
   <div>
    <Navbar />
    <section className='card-list'>
      {data}
    </section>
   </div> 
  );
}

export default App;
