// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/main-page';

const App = () => {
    return (
        <div className='all'>
            <Header />
            <main>
                <MainPage />
            </main>
            <Footer />
        </div>
    );
};

export default App;
