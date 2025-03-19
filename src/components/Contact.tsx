const Contact = () => {
  return (
    <section className="space-y-6">
      <p className="text-lg">
        Get in touch with me at{' '}
        <a 
          href="mailto:vasighizaker@gmail.com"
          className="underline hover:text-gray-600"
        >
          vasighizaker@gmail.com
        </a>
      </p>
      
      <div className="space-x-6">
        <a 
          href="https://github.com/vasighiz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/vasighi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact 