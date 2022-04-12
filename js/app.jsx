import styled from "@emotion/styled";

const CircleSvg = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="3" fill="#EFEFEF" />
    <circle cx="6" cy="6" r="5.5" stroke="#EFEFEF" />
  </svg>
);

const PlayCircleSvg = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6Z"
      fill="#EFEFEF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.76407 3.55916C4.92665 3.47215 5.12392 3.48169 5.27735 3.58398L8.27735 5.58398C8.41645 5.67671 8.5 5.83282 8.5 6C8.5 6.16718 8.41645 6.32329 8.27735 6.41603L5.27735 8.41603C5.12392 8.51831 4.92665 8.52785 4.76407 8.44084C4.60149 8.35383 4.5 8.1844 4.5 8V4C4.5 3.8156 4.60149 3.64617 4.76407 3.55916ZM5.5 4.93426V7.06574L7.09861 6L5.5 4.93426Z"
      fill="#EFEFEF"
    />
  </svg>
);

const ErrorSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.38042 6.00001C4.89615 3.3747 5.65401 2.06205 6.64344 1.62152C7.50646 1.23728 8.49199 1.23728 9.35501 1.62152C10.3444 2.06205 11.1023 3.3747 12.618 6.00001C14.1337 8.62532 14.8916 9.93797 14.7784 11.0151C14.6797 11.9546 14.1869 12.8081 13.4226 13.3634C12.5464 14 11.0307 14 7.99922 14C4.96778 14 3.45206 14 2.57584 13.3634C1.81156 12.8081 1.3188 11.9546 1.22005 11.0151C1.10684 9.93797 1.8647 8.62532 3.38042 6.00001ZM7.99919 4.16668C8.27533 4.16668 8.49919 4.39053 8.49919 4.66668V8.66668C8.49919 8.94282 8.27533 9.16668 7.99919 9.16668C7.72304 9.16668 7.49919 8.94282 7.49919 8.66668V4.66668C7.49919 4.39053 7.72304 4.16668 7.99919 4.16668ZM7.99919 11.3333C8.36738 11.3333 8.66585 11.0349 8.66585 10.6667C8.66585 10.2985 8.36738 10 7.99919 10C7.631 10 7.33252 10.2985 7.33252 10.6667C7.33252 11.0349 7.631 11.3333 7.99919 11.3333Z"
      fill="#EB5757"
    />
  </svg>
);

const PlusSvg = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.64788 2.10878C1.25 2.65642 1.25 3.43761 1.25 5C1.25 6.56239 1.25 7.34358 1.64788 7.89122C1.77638 8.06808 1.93192 8.22362 2.10878 8.35212C2.65642 8.75 3.43761 8.75 5 8.75C6.56239 8.75 7.34358 8.75 7.89122 8.35212C8.06808 8.22362 8.22362 8.06808 8.35212 7.89122C8.75 7.34358 8.75 6.56239 8.75 5C8.75 3.43761 8.75 2.65642 8.35212 2.10878C8.22362 1.93192 8.06808 1.77638 7.89122 1.64788C7.34358 1.25 6.56239 1.25 5 1.25C3.43761 1.25 2.65642 1.25 2.10878 1.64788C1.93192 1.77638 1.77638 1.93192 1.64788 2.10878ZM5.3125 3.75C5.3125 3.57741 5.17259 3.4375 5 3.4375C4.82741 3.4375 4.6875 3.57741 4.6875 3.75V4.6875H3.75C3.57741 4.6875 3.4375 4.82741 3.4375 5C3.4375 5.17259 3.57741 5.3125 3.75 5.3125H4.6875V6.25C4.6875 6.42259 4.82741 6.5625 5 6.5625C5.17259 6.5625 5.3125 6.42259 5.3125 6.25V5.3125H6.25C6.42259 5.3125 6.5625 5.17259 6.5625 5C6.5625 4.82741 6.42259 4.6875 6.25 4.6875H5.3125V3.75Z"
      fill="#EFEFEF"
    />
  </svg>
);

function Inputsignal() {
  return (
    <div className="signals signals-input">
      <PlayCircleSvg />
    </div>
  );
}

function Outputsignal() {
  return (
    <div className="signals signals-output">
      <CircleSvg />
    </div>
  );
}

const TitleH4 = styled.h4`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

function Title() {
  return <TitleH4>Create user</TitleH4>;
}

const accentColor = "#27AE60";
const textColor = "#26233F";

const ToggleDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;

  input[type="checkbox"] {
    display: none;

    & + label {
      width: 20px;
      height: 12px;
      border-radius: 8px;
      border: 1px solid ${accentColor};
      position: relative;
      transition: 0.35s;

      &::before {
        position: absolute;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${accentColor};
        top: 2px;
        left: 2px;
        transition: 0.35s;
      }
    }

    &:checked {
      & + label {
        background-color: ${accentColor};

        &::before {
          left: 10px;
          background-color: #fff;
        }
      }
    }
  }
`;

function Toggle() {
  return (
    <ToggleDiv>
      <input type="checkbox" id="show-info" name="show-info" />
      <label htmlFor="show-info" />
    </ToggleDiv>
  );
}

const HeaderDiv = styled.div`
  width: 100%;
  height: 32px;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: row;
  border-radius: 14px 14px 0 0;
  justify-content: space-between;
`;

function CardHeader() {
  return (
    <HeaderDiv>
      <div className="card-header__left">
        <Inputsignal />
        <Title />
      </div>
      <div className="card-header__right">
        <Toggle />
        <Outputsignal />
      </div>
    </HeaderDiv>
  );
}

function Checkbox() {
  return (
    <>
      <input
        type="checkbox"
        id="var-output-checkbox"
        name="var-output-checkbox"
      />
      <label htmlFor="var-output-checkbox" />
    </>
  );
}

function InputPort({ symbol, name }) {
  return (
    <div className="var-input">
      <div className="bind" style={{ "background-color": "#E2B93B" }}>
        <span>{symbol}</span>
      </div>
      <p>{name}</p>
      <Checkbox />
    </div>
  );
}

function InputVarAdd() {
  return (
    <a href="#" className="var-input var-input_add">
      <div className="bind" style={{ "background-color": "#E2B93B" }}>
        <PlusSvg />
      </div>
      <p>add var</p>
    </a>
  );
}

function OutputPort({ symbol, name }) {
  return (
    <div className="var-output">
      <Checkbox />
      <p>{name}</p>
      <div className="bind" style={{ "background-color": "#E2B93B" }}>
        <span>{symbol}</span>
      </div>
    </div>
  );
}

function InputVars() {
  return (
    <div className="vars vars-input">
      <InputPort symbol="s" name="in-port" />
      <InputPort symbol="s" name="in-port" />
      <InputPort symbol="s" name="in-port" />
      <InputPort symbol="s" name="in-port" />
      <InputPort symbol="s" name="in-port" />
      <InputVarAdd />
    </div>
  );
}

function OutputVars() {
  return (
    <div className="vars vars-output">
      <OutputPort symbol="s" name="out-port" />
      <OutputPort symbol="s" name="out-port" />
      <OutputPort symbol="s" name="out-port" />
    </div>
  );
}

function CardBody() {
  return (
    <div className="card-body">
      <InputVars />
      <OutputVars />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="card-footer">
      <ErrorOutput />
    </div>
  );
}

function ErrorOutput() {
  return (
    <div className="error-output">
      <ErrorSvg />
    </div>
  );
}

export default function App() {
    return (
        <div className="function">
            <CardHeader/>
            <CardBody/>
            <CardFooter/>
        </div>

    )
}
