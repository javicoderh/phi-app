
const FormularioIngreso: React.FC = () => {
    

    return (
        <div className="flex flex-col items-center justify-center p-4 border-2 border-white rounded backdrop-blur-md bg-blue/50 shadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)]">
            <form className="flex flex-col items-center justify-center gap-4 w-full">
                <h2 className="text-white
                 font-bold">Formulario de Ingreso</h2>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormularioIngreso;
