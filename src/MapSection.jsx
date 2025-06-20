import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const spotai = [
    { name: 'Vilnius – IGYM', position: [54.71190532718669, 25.236551782445517] },
    { name: 'Kaunas – Santakos parkas', position: [54.8985, 23.9036] },
    { name: 'Klaipėda – parkas prie Danės', position: [55.7033, 21.1443] },
    { name: 'Jonava – Prie Marijos', position: [55.079645, 24.272476] },
];

function MapSection() {
    return (
        <section
            id="zemelapis"
            className="scroll-mt-24 max-w-6xl mx-auto mb-24 px-4"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center font-orbitron">
                Tricking spot’ų žemėlapis
            </h2>
            <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
                <MapContainer center={[55.1694, 23.8813]} zoom={7} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    {spotai.map((spot, index) => (
                        <Marker key={index} position={spot.position}>
                            <Popup>{spot.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
}

export default MapSection;