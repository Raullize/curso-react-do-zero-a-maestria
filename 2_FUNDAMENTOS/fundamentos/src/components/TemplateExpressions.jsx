const TemplateExpressions = () => {
    // Template Expressions
    const name = "Raul";
    const data = {
        age: 21,
        job: "Software Developer"
    }
    
    return (
        <div>
            {/* Template Expressions */}
            <p>Olá {name}, tudo bem?</p>
            <p>Você atua como: {data.job}</p>
            <p>2 + 2 = {2+2}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions;