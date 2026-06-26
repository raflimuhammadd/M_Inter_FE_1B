export default function AuthBackground({ image }) {
  return (
    <>
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px]
                      bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)]
                      pointer-events-none z-0" />
      <div className="fixed bottom-[-150px] left-[-100px] w-[600px] h-[600px]
                      bg-[radial-gradient(circle,rgba(192,132,252,0.08)_0%,transparent_70%)]
                      pointer-events-none z-0" />
      <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <img src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover
                                           opacity-[0.18] blur-[2px] saturate-[0.6]" />
        <div className="absolute inset-0 bg-[#0d0d0f]/75" />
      </div>
    </>
  )
}