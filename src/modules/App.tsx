import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import './../styles/App.css'
import Articles from './app/articles/Articles'
import Footer from './app/shared/components/footer/Footer'
import NotFound from './app/shared/components/not-found/NotFound'

function App() {
    const queryClient = new QueryClient()
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Articles />} />
                </Routes>
            </QueryClientProvider>
            <Footer />
        </div>
    )
}

export default App
