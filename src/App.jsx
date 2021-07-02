import React, { useState } from 'react'
import Home from '@/views/Home/Home'
function App() {
    const [title, setTitle] = useState("123")
    return (
        <div>
            <Home />
        </div>
    )
}
export default App