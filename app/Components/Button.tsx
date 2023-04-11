const Button=({children}) => {
    return(
        <button className='text-white text-center border-green-600  ml-[800px] bg-green-600 border-invisible border-2  h-[60px] w-[100px] rounded-lg p-[10px] mt-[-180px] transition ease-out animate-bounce hover:bg-green-900 hover:scale-150'>
        {children}</button>
    )

}
export default Button;