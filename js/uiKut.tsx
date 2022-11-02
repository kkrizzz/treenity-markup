import { FunctionComponent } from 'react';
import AppLayout from './Layouts/AppLayout/AppLayout';
import styled from '@emotion/styled';
import icons from './components/Icon/Treenity.json';
import typography from '../assets/typography.module.scss';
import Icon from './components/Icon';
import Input from './components/Input';
import { Button, Form } from 'antd';
import Select from './components/Select';

const LayoutStyled = styled.div`
  padding: 40px
`;

const EmptyStyled = styled.div`
  height: 32px
`;

const TitleStyled = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  color: #26233F;
`;

const SubTitleStyled = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: #A7A2BD;
`;

const LabelStyled = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #A7A2BD;
`;

const IconsStyled = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, 25px);
  i {
    font-size: 24px;
  }
`;

const InputsWrapperStyled = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 300px);
  
  .wrapper {
    margin-bottom: 30px
  }
`;

const WrapperStyled = styled.div`
  margin-bottom: 120px
`;

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 300px);
  div {
    p {
      margin-bottom: 10px
    }
    div {
      width: 100%;
      height: 1px;
      background: #000000;
    }
  }
`;

const validator = (minValue, text) => (rule, value, callback) => {
  if (value && value >= minValue) {
    callback();
  } else {
    callback(new Error(text));
  }
};

const UiKit: FunctionComponent = () => {
  return (
    <AppLayout>
      <LayoutStyled>
        <WrapperStyled>
          <TitleStyled>
            Iconography
          </TitleStyled>
          <IconsStyled>
            {icons.selection.map(i => (
              <Icon name={i.name} />
            ))}
          </IconsStyled>
        </WrapperStyled>
        <WrapperStyled>
          <TitleStyled>
            Text styles
          </TitleStyled>
          <TextWrapper>
            <div>
              <p className={typography['title-main']}>Main title</p>
            </div>
            <div>
              <p className={typography['title-big']}>Title BIG</p>
            </div>
            <div>
              <p className={typography['title-medium']}>Title MEDIUM</p>
            </div>
            <div>
              <p className={typography['title-small']}>Title SMALL</p>
            </div>
            <div>
              <p className={typography['headline']}>Headline</p>
            </div>
            <div>
              <p className={typography['subhead']}>Subhead</p>
            </div>
            <div>
              <p className={typography['paragraph-text']}>Paragraph text, at ex condimentum.</p>
            </div>
            <div>
              <p className={typography['text-info']}>Some information</p>
            </div>
          </TextWrapper>
        </WrapperStyled>
        <WrapperStyled>
          <TitleStyled>
            Inputs
          </TitleStyled>
          <InputsWrapperStyled>
            <div>
              <SubTitleStyled>
                Text inputs
              </SubTitleStyled>
              <div className="wrapper">
                <LabelStyled>
                  Default
                </LabelStyled>
                <Input placeholder="Text" isButton label="Text" />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Disable
                </LabelStyled>
                <Input placeholder="Text" disabled isButton label="Text" />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Filled
                </LabelStyled>
                <Input placeholder="Text" isButton value="Some text" label="Text" />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Success message
                </LabelStyled>
                <Form style={{ position: 'relative' }}>
                  <Form.Item
                    name="number"
                    rules={[
                      { required: true, message: 'ERROR' },
                      { validator: validator(50, 'ERROR') },
                    ]}>
                    <Input placeholder="Text" isButton label="Text" />
                  </Form.Item>
                  <Form.Item
                    key="submitItem"
                    style={{ position: 'absolute', left: 0, top: 0, transform: 'translateX(-100%)' }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="float-right mt-10 login-form-button"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Error message
                </LabelStyled>
                <Form initialValues={{ number: 49 }}  style={{ position: 'relative' }}>
                  <Form.Item
                    name="number"
                    rules={[
                      { required: true, message: 'ERROR' },
                      { validator: validator(50, 'ERROR') },
                    ]}>
                    <Input placeholder="Text" isButton label="Text" />
                  </Form.Item>
                  <Form.Item
                    key="submitItem"
                    style={{ position: 'absolute', left: 0, top: 0, transform: 'translateX(-100%)' }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="float-right mt-10 login-form-button"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Tooltip
                </LabelStyled>
                <Input placeholder="Text" isButton label="Text" tooltip="Tooltip text here" />
              </div>
            </div>
            <div>
              <SubTitleStyled>
                Dropdown
              </SubTitleStyled>
              <div className="wrapper">
                <LabelStyled>
                  Tooltip
                </LabelStyled>
                <Select
                  label="Select"
                  placeholder="Placeholder"
                  options={[
                    {
                      value: '1',
                      label: 'Something text 1',
                    },
                    {
                      value: '2',
                      disabled: true,
                      label: 'Something text 2 disabled',
                    },
                    {
                      value: '3',
                      label: 'Something text 3',
                    },
                  ]}
                />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Autosuggest
                </LabelStyled>
                <Select
                  label="Select"
                  open={true}
                  placeholder="Placeholder"
                  options={[
                    {
                      value: '1',
                      label: 'Something text 1',
                    },
                    {
                      value: '2',
                      disabled: true,
                      label: 'Something text 2 disabled',
                    },
                    {
                      value: '3',
                      label: 'Something text 3',
                    },
                  ]}
                />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  &nbsp;
                </LabelStyled>
                <EmptyStyled />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Select
                </LabelStyled>
                <Select
                  label="Select"
                  defaultValue="1"
                  open={true}
                  placeholder="Placeholder"
                  options={[
                    {
                      value: '1',
                      label: 'Something text 1',
                    },
                    {
                      value: '2',
                      disabled: true,
                      label: 'Something text 2 disabled',
                    },
                    {
                      value: '3',
                      label: 'Something text 3',
                    },
                  ]}
                />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  &nbsp;
                </LabelStyled>
                <EmptyStyled />
              </div>
              <div className="wrapper">
                <LabelStyled>
                  Multiselect
                </LabelStyled>
                <Select
                  label="Select"
                  mode="tags"
                  placeholder="Placeholder"
                  options={[
                    {
                      value: '1',
                      label: 'Something text 1',
                    },
                    {
                      value: '2',
                      disabled: true,
                      label: 'Something text 2 disabled',
                    },
                    {
                      value: '3',
                      label: 'Something text 3',
                    },
                  ]}
                />
              </div>
            </div>
          </InputsWrapperStyled>
        </WrapperStyled>
      </LayoutStyled>
    </AppLayout>
  );
};

export default UiKit;