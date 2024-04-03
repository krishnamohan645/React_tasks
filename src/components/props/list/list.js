import React from "react";
import ListItems from "./listitems";

const ListComponent = () => {
    const listItems = [
        {
            name: "apple",
            type: "fruit",
            isFruit: true,
            image: "data:image/jpeg;base64,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",
            id: 1
        },
        {
            name: "mango",
            type: "fruit",
            isFruit: true,
            image: "https://www.bing.com/th?id=OIP.b3fzCzEek1R_6Z10xSvICgHaE7&w=150&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            id: 2
        },
        {
            name: "potato",
            type: "vegetable",
            isFruit: false,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAGYArAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQMCBAUG/9oACAEBAAAAAPpUAwAQAAA0AY8+WNdNK3AAGgc/DpXDjLF/W6QAYheBtuhFRnb2OkGMF5XBfNFHTzkn9DUGwPCjRY511oyo93svQwPG42Rx0VxnGMV+j22wOfwYRdrmc4mrfR002Cn5HmQ1fRz7B+h61tDDHNw8nHOq1jSyvX9ejGLHHzxlCOMJat1+j6Gxgsc0JzzlJPVensqDAUoTzlAOl76YH//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oACgICEAMQAAAAAzrG7nebAAxvzegqN49PnAPL6cbslSuvLvxA8/fn0EVN59XngJrj3xQZ647coCs1ZSyxAKIAA//EAC8QAAICAQMCBQEHBQAAAAAAAAECAAMRBBIhEzEgMEFRYRAFMkJDcYGRIkBSYnL/2gAIAQEAAT8A/vLbUqXc5h1lthPTwg/kwi1/vWMf3hRx2dh+8Go1Nf49w9m5ia9fzKyPkQa7T+7fxE1ND9rB51tqU1l3PAjO2ps3ufgCIyDhSMwuQMzduUTaIywjE3Y7yrUW1Y2Nx7HtKNSl3w3qvlswVSzHAAyTL731NoJ4QfdWIuO8IAz2JzwYoL55gQKsLDbj6ERlgBBgJBDA4I5Bmm1AuT2cdx5X2lcRtqH6mVMZz6mYgwuTOp/SMwvwYpeFveH6EYgssqsV07iVWrciuvk6wk6q2LCZ+sdgRC2BKX3sVhGBB9CYTHM0FuLmT0fydehF270YCAkQt2m+MTMbhgSirp5zjJhxD9GMzGM0rY1NJ/2g8jUVdWsj1HIjdyPmNnPeZcHkwMS2CYrbcY7wEwwtN8YzMM0yk31f9CCDxs2JqV3MWXv6iOfaEBiDnmCs8TkdhN+BHebiTAcwwciYmjQBt8WDxGWtHllYbn1j1kekVmUzqA/E9ciETbiAHEO38TAQ31L2bMFjucKuBNIDgZiiDxNLIwhEKRqQY1B9507R2aFL/wDOdO4/mNOg57sTBpRE0wldIEorxAPG0dYVhWFYVmybJsnTnTgri1RKoiAeSyxlhWFZtm0TYJsE2CBBBWItYgUDxf/EACERAAICAQQCAwAAAAAAAAAAAAECABEgAxASURMhMDFh/9oACAECAQE/AN2cLPKOoNRTOS9jN24iEnBXK/ogIIsYubY5abUax1Fo5L9jEgEUYUI2rYCIvuznU4jqVK+f/8QAIBEAAgMAAgEFAAAAAAAAAAAAAQIAESADEjEQEzBRYf/aAAgBAwEBPwD1Clp7X7DxsJ1b6O0XsZQ8YZAYRWUACjXIti8obErLeDkGjFcHBjHdmdjOxl/P/9k=",
            id: 3
        }
    ];

    return (
        <div>
            <ol>
                {listItems.map((eachObject) => (
                    <ListItems imageURL={eachObject} />
                ))}
            </ol>
        </div>
    );
};

export default ListComponent;