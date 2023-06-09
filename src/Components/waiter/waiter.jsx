import './waiter.css'
export default function Mesa() {
    return (
        <>
            <div id="burguerQueen">
                <h1>Carta y Cuenta</h1>
                <div>
                    <form id="search-form" role="search">

                        <label>Client:</label>
                        <input
                            id="client"
                            aria-label="enter name"
                            placeholder="example Ana"
                            type="text"
                            name="client"
                        />
                    </form>

                    <button type="submit">Send to kitchen</button>

                </div>

            </div>
            <div id="detail"></div>
        </>
    );
}