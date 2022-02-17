export const customStyles = {
    option: (provided, state) => ({
      paddingLeft: 10,
      paddingBottom: 10,
      paddingTop: 10,
      ':hover': {
          backgroundColor: "#5F01FF",
          color: 'white',
      },
    }),
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? '2px solid #5F01FF' : '2px solid #5F01FF',
        // This line disable the blue border
        boxShadow: state.isFocused ? '2px solid #5F01FF' : '2px solid #5F01FF',
        '&:hover': {
           border: state.isFocused ? '2px solid #5F01FF' : '2px solid #5F01FF'
        }
    }),
}