import React from "react";

interface Props {
    isValid: boolean;
    isLoading: boolean;
}

const CheckValid: React.FC<Props> = ({isValid, isLoading}) => {
    return (
        <div>
            {isLoading && <div>is loading ...</div>}
            {(!isLoading && isValid) && <div>checked</div>}
            {(!isLoading && !isValid) && <div>not checked</div>}
        </div>
    );
}

export default CheckValid;