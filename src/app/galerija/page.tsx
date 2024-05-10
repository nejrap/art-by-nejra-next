import Galerija from "../../../components/Galerija";

export default function GalerijaPage() {
    return (
        <div>
            <Galerija brojSlika={8} />
            <button className="text-white rounded-full px-4 py-2">Add to chart</button>
        </div>
    )
}
