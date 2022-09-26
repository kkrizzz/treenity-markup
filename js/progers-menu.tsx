import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import { OpenCloseSvg, OpenCloseInnerSvg, CloseSvg } from './svg';

export function addOpacity(hex, opacity) {
    return hex + Math.round(opacity * 256).toString(16).padStart(2, '0');
}

export const accentColor = '#27AE60';
export const accentClick = '#208b4d';
export const textColor = '#26233F';
export const light = '#F4F4F6';
export const gray = '#A7A2BD';

export const white = '#fff';

export const errorColor = '#eb5757';
export const warningColor = '#E2B93B';

export const NodeHeaderBG = '#e2e2e2';

const ProgersMenuDiv = styled.div`
    width: 340px;
    font-family: "Inter", sans-serif;
    position: absolute;
    right: 0;
    top: 64px;
    /* margin: 100px auto; */
`;

const ProgersMenuHeaderDiv = styled.div`
    width: 100%;
    height: 56px;
    background-color: ${light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #DDE0E2;
`;

const ProgersMenuSwitchDiv = styled.div`
    width: 100%;
    height: 28px;
    background-color: #EFEFEF;
    border-bottom: 1px solid #DDE0E2;
    display: flex;
    align-items: center;
    a{
        font-size: 10px;
        font-weight: 500;
        color: #26233F;
        text-decoration: none;
        position: relative;
        height: 100%;
        line-height: 26px;
        padding: 0 12px;
        &::before{
          position: absolute;
          content: '';
          width: 100%;
          height: 3px;
          background-color: ${accentColor};
          bottom: -1px;
          left: 0;
          right: 0;
          opacity: 0;
        }
        &.active{
          &::before{
            opacity: 1;
          }
        }
      }
`;

const ProgersMenuHeaderButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        font-weight: 500;
        font-size: 12px;
        cursor: pointer;
        &:first-of-type{
            color: ${gray};
            &:hover {
                color:  ${addOpacity(accentColor, 0.8)}
            }
        
            &:active {
                color: ${accentClick};
            }
        }
        &:nth-of-type(2){
            color: ${accentColor};
            margin: 0 12px;
            &:hover {
                color:  ${addOpacity(accentColor, 0.8)}
            }
        
            &:active {
                color: ${accentClick};
            }
        }
        &:last-of-type{
            width: 78px;
            height: 36px;
            border-radius: 10px;
            background-color: ${accentColor};
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color:  ${addOpacity(accentColor, 0.8)}
            }
        
            &:active {
                background-color: ${accentClick};
            }
        }
    }
`;

// Кнопка открытия и закрытия меню

export const MenuOpenClose = ({onCollapse2}) => <a href="#" className="open-close" onClick={onCollapse2}><OpenCloseSvg/></a>;

// Кнопки хэдэра меню

function ProgersMenuHeaderButton ({link, id, className, children}) {
    return <a href={link} className={className}>{children}</a>;
}

function ProgersMenuHeaderButtons () {
    return(
        <ProgersMenuHeaderButtonsDiv>
            <ProgersMenuHeaderButton children="Preview"/>
            <ProgersMenuHeaderButton children="Save as draft"/>
            <ProgersMenuHeaderButton children="Publish"/>
        </ProgersMenuHeaderButtonsDiv>
    );
}

// Сборка хэдэра

export function ProgersMenuHeader () {
    return(
        <ProgersMenuHeaderDiv>
            <MenuOpenClose/>
            <ProgersMenuHeaderButtons/>
        </ProgersMenuHeaderDiv>
    );
}

// Кнопки переключения между МЕТА и ПРОПС

function ProgersMenuSwitchButton ({link, id, className, children}){
    return <a href={link} className={className}>{children}</a>;
}

// Сборка блока переключения между МЕТА и ПРОПС

export function ProgersMenuSwitch () {
    return(
        <ProgersMenuSwitchDiv>
            <ProgersMenuSwitchButton className="active" children="Metas" />
            <ProgersMenuSwitchButton children="Properties" />
        </ProgersMenuSwitchDiv>
    );
}

// Начало блока с пропсами для разрабов

const ProgersInputsBlockDiv = styled.div`
    width: 100%;
    padding: 12px 16px;
    background-color: ${light};
    border-bottom: 1px solid #DDE0E2;
`;

const ProgersInputsBlockHeaderDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TitleH5 = styled.h5`
    font-size: 12px;
    font-weight: 500;
    color: #26233F;
`;

const ProgersInputsBlockHeader_inner = styled.div`
    display: flex;
    align-items: center;
`; 

const TagSpan = styled.span`
    font-size: 8px;
    line-height: 8px;
    color: #a7a2bd;
`;

const AddTagButton = styled.a`
    font-size: 8px;
    line-height: 8px;
    padding: 2px;
    color: #27AE60;
    text-decoration: none;
    background-color: ${addOpacity(accentColor, 0.1)};
    border-radius: 2px;
    margin: 0 6px;
    display: block;
`;

const CollapseButtonStyle = styled.button`
    width: 18px;
    height: 18px;
    outline: none;
    background-color: none;
    border: none;
`;

// Тэг

function Tag ({ children }){
    return <TagSpan>{children}</TagSpan>;
}

// Заголовок пропсов

function Title({ children }) {
    return <TitleH5>{children}</TitleH5>;
}

// Добавление тэга

function AddTag (){
    return <AddTagButton href="#" className="tag">+Tag</AddTagButton>;
}

// Сборка ъэдэра пропсов

export function ProgersInputsBlockHeader ({onCollapse}){
    return (
        <ProgersInputsBlockHeaderDiv>
            <ProgersInputsBlockHeader_inner>
                <Title children="Message props"/>
            </ProgersInputsBlockHeader_inner>
            <ProgersInputsBlockHeader_inner>
                <Tag children="(8qNs56FxSFyH7mR9a)"/>
                <AddTag/>
                <CollapseButtonStyle onClick={onCollapse}>
                    <OpenCloseInnerSvg/>
                </CollapseButtonStyle>
            </ProgersInputsBlockHeader_inner>
        </ProgersInputsBlockHeaderDiv>
    );
}

const VarPropsDeleteStyle = styled.a`
  display: block;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${addOpacity(errorColor, 0.2)};
  border-radius: 6px;
  order: -1;
  grid-area: delete;
  margin: auto 0;
`;

const ProgersInputsBlockBody = styled.div`
    display: block;
    margin-top: 8px;
`;

const ProgersPropsInputDiv = styled.div`
    width: 100%;
    display: grid;
    margin-bottom: 4px;
    grid-column-gap: 6px;
    grid-row-gap: 4px;
    grid-template-columns: calc(100% - 34px) 28px;
    grid-template-areas:
    "label label"
    "input delete";
    &:last-of-type{
        margin-bottom: 0;
    }
    label {
        /* display: inline-block; */
        width: 100%;
        margin: 0 0 -8px 6px;
        z-index: 1;
        font-size: 12px;
        line-height: 12px;
        font-weight: 600;
        color: ${gray};
        order: -3;
        transition: 0.15s;
        grid-area: label;
        
        span{
            background-color: #EFEFEF;
            padding: 0 4px 0 2px;
            border-radius: 5px;
        }
    }

    input {
        height: 28px;
        border: none;
        background-color: ${white};
        border-radius: 10px;
        padding: 0 10px;
        font-size: 12px;
        line-height: 12px;
        font-weight: 400;
        color: ${textColor};
        outline: none;
        transition: 0.15s;
        order: -2;
        grid-area: input;
        font-family: "Inter", sans-serif;
        border: 1px solid ${addOpacity(gray, 0.25)};
        &::placeholder {
            color: ${addOpacity(textColor, 0.4)};
        }
        &:hover {
            border-color: ${addOpacity(accentColor, 0.5)};
            & + label {
                color: ${accentColor};
            }
        }

        &:focus {
            border-color: ${accentColor};

            & + label {
            color: ${accentColor};
            }
        }
    }
`;

// Инпуты пропсов

export function ProgersInput({ name, id, placeholder }) {
    return <input type="text" name={name} id={id} placeholder={placeholder} />;
}

// Лэйблы инпутов

export function InputLabel({ children }) {
    return <label htmlFor=""> <span> {children} </span> </label>;
}

// Кнопка удаления

export function PropsDelete() {
    return (
      <VarPropsDeleteStyle>
        <DeleteSvg />
      </VarPropsDeleteStyle>
    );
}

// Стилизация селекта пропсов

const customSelect = {
    control: () => ({
        height: 28,
        backgroundColor: white,
        borderRadius: 10,
        border: '1px solid #a7a2bd40',
        padding: '0 5px 0 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
    valueContainer: () => ({
        height: 25,
        display: 'flex',
        alignItems: 'center'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    indicatorsContainer: () => ({
        padding: 0,
        height: 20
    }),
    dropdownIndicator: () => ({
        padding: 0,
        height: 20,
        opacity: 0.2
    }),
    placeholder: () => ({
        fontSize: 12,
        color: '#26233f66'
    }),
    singleValue: () => ({
        fontSize: 12,
        color: '#26233F'
    }),
    input: () => ({
        height: 28,
        margin: 0,
        padding: 0,
        fontSize: 12,
        color: '#26233f'
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: 10,
        border: '1px solid #a7a2bd40',
        marginTop: 4,
        backgroundColor: '#ffffff',
        padding: 0,
        boxShadow: 'none',
        zIndex: '10'
    }),
    menuList: () => ({
        padding: 0
    }),
    option: (provided, state) => ({
        ...provided,
        borderRadius: 10,
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        fontSize: 12,
        margin: 0,
        color: state.isSelected ? '#fff' : '#26233f',
        backgroundColor: state.isSelected ? '#27ae60' : '#ffffff',
        "&:hover": {
            backgroundColor: addOpacity(accentColor, 0.2)
        }
    })
}

// Параметры селекта

const options = [
    {value: 'inline', label: 'Inline'},
    {value: 'grid', label: 'Grid'},
    {value: 'flex', label: 'Flex'}
]

// Сборка блока с инпут полем

function ProgersPropsInput () {
    return(
        <ProgersPropsInputDiv>
            <ProgersInput placeholder="Hello my dear friend"/>
            <InputLabel children="Text"/>
            <PropsDelete/>
        </ProgersPropsInputDiv>
    );
}

// Сборка блока с селектом

function ProgersPropsSelect () {
    return(
        <ProgersPropsInputDiv>
            <InputLabel children="menu Type"/>
            <Select styles={customSelect} options={options}/>
            <PropsDelete/>
        </ProgersPropsInputDiv>
    );
}

const ProgersPropsButtonsLineDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 6px;
    border-radius: 10px;
    border: 1px solid ${addOpacity(gray, 0.25)};
    background-color: ${white};
    height: auto;
`;

const ProgersPropsButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${textColor};
    padding: 0 8px;
    background-color: ${addOpacity(gray, 0.25)};
    border-radius: 4px;
    height: 20px;
    margin-right: 4px;
    svg{
        margin-left: 4px;
        width: 8px;
        height: 8px;
    }
`;

function ProgersPropsButton ({children}) {
    return(
        <ProgersPropsButtonDiv>
            <span>{children}</span>
            <CloseSvg/>
        </ProgersPropsButtonDiv>
    );
}

const ProgersPropsButtonAddLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${accentColor};
    padding: 0 8px;
    border-radius: 4px;
    height: 20px;
    text-decoration: none;
    background-color: ${addOpacity(accentColor, 0.1)};
    white-space: nowrap;
`;

function ProgersPropsButtonAdd () {
    return(
        <ProgersPropsButtonAddLink href='#'>
            Add button
        </ProgersPropsButtonAddLink>
    );
}

function ProgersPropsAddButtons () {
    return(
        <ProgersPropsInputDiv>
            <InputLabel children="Rows"/>
            
            <ProgersPropsButtonsLineDiv>
               
                <ProgersPropsButton children="ButtonLagre"/>

                <ProgersPropsButton children="Bu"/>

                <ProgersPropsButtonAdd />
            </ProgersPropsButtonsLineDiv>

            <PropsDelete/>
        </ProgersPropsInputDiv>
    );
}

// Сборка полного блока пропсов

export function ProgersInputsItem (){
    const [collapse, setCollapse] = React.useState(false);
    
    return(
        <ProgersInputsBlockDiv>
            
            <ProgersInputsBlockHeader onCollapse={() => setCollapse (c => !c)} />

            {!collapse &&
                <ProgersInputsBlockBody>
                    <ProgersPropsInput/>
                    <ProgersPropsSelect/>
                    <ProgersPropsAddButtons/>
                </ProgersInputsBlockBody>
            }
            

        </ProgersInputsBlockDiv>
    );
}

const ProgersInputsDiv = styled.div`
    width: 100%;
    background-color: ${light};
    height: calc(100vh - 28px - 56px);
`;

function ProgersInputs () {
    return(
        <ProgersInputsDiv>
            <ProgersInputsItem/>
            <ProgersInputsItem/>
            <ProgersInputsItem/>
        </ProgersInputsDiv>
    );
}

// Сборка прогерского меню

export default function ProgersMenu () {
    return(
        <ProgersMenuDiv>
            <ProgersMenuHeader/>
            <ProgersMenuSwitch/>
            <ProgersInputs/>
        </ProgersMenuDiv>
    );
}