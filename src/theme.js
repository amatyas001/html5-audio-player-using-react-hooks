const theme = (theme) => {
	return (
		{
			colors: {
		    primaryColor: '#3ba30d',
		    secondaryColor: theme === 'default' ? '#ffffff' : '#6A6A6A',
		    textColor: theme === 'default' ? '#262626' : '#ffffff',
		    altTextColor: '#ffffff',
		    backgroundColor: theme === 'default' ? '#dedede' : '#262626',
		  },
		  radii: {
		  	defaultRadius: '.25rem'
		  }
		}
	)
}

export default theme