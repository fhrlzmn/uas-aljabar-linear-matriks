import Navbar from './Navbar';
import Footer from './Footer';
// import Header from './Header';

export default function Container({ children }) {
  return (
    <div className='w-full'>
      {/* <Header /> */}
      <Navbar />
      <div className='max-w-screen-lg mx-auto px-6'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
