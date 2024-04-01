import bg from "../assets/bg.png";

export default function HomePage() {
  return (
    <div className="w-full h-screen relative">
      <img src={bg} alt="bg" className="w-full h-auto" />
      <div className="z-10 absolute top-0 left-0 w-full h-full">
        <p className="font-medium text-xl text-white">Bloobin</p>
        <spline-viewer url="https://prod.spline.design/378qG2pHeQuxFSdZ/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
}
