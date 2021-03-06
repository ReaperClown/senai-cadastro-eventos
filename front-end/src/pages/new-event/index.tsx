import { ArrowRightOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Layout,
  Menu,
  message,
  TimePicker,
} from "antd";
import "antd/dist/antd.css";
import ptBR from "antd/lib/locale/pt_BR";
import axios from "axios";
import MyFooter from "components/footer";
// import Footer from "components/footer";
import moment from "moment";
import "moment/locale/pt-br";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { formatDate, formater } from "utils/format";

export { TimePicker, Button, DatePicker };

moment.locale("pt-br");
moment().format("LT");

async function loadNames() {
  const response = await fetch('https://api-cadastro-eventos.herokuapp.com/api/v1/eventos');
  const names = await response.json();
  console.log(names); 
  // logs [{ name: 'Joker'}, { name: 'Batman' }]
}


const { Header, Content, Footer } = Layout;
const fs = require("fs");

const FormSizeDemo = () => {
  const [form] = Form.useForm();

  loadNames();

  // const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const onFinish = (values: { id: any; nome: any; data: any; participantes: any; horario: any; }) => {
    message.success("Evento cadastrado com sucesso!");

    console.log(values);
    axios.post("https://api-cadastro-eventos.herokuapp.com/api/v1/eventos", {
      id: 12,
      nome: values.nome,
      data: values.data,
      participantes: 1,
      horario: values.horario
    });
  };

  const onFinishFailed = () => {
    message.error("Falha ao cadastrar o evento. Por favor confira os campos.");
  };

  const actualDate = moment().format("L");
  const actualDateFormat = moment().format("YYYY-MM-DD");

  // const validateMessages = {
  //   required: "'${name}' is required!",
  // };

  const onChangeTime = (time: any, ranges: any) => {
    console.log(ranges[0]);
  };

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Link to="/" className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/cadastro">Cadastrar Evento</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/listagem">Listar Eventos</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/cadastro">Cadastrar Evento</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 450 }}
          >
            <SimpleBar style={{ height: "400px" }}>
              <div className="container">
                <div className="row">
                  <ConfigProvider locale={ptBR}>
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      className="myForm"
                    >
                      <Form.Item
                        hasFeedback
                        required
                        name={["nome"]}
                        label={["Nome do evento"]}
                        tooltip="Nome do evento. N??o ?? permitido eventos com nomes iguais."
                        rules={[
                          {
                            required: true,
                            message: "Voc?? deve definir um nome para o evento",
                          },
                        ]}
                      >
                        <Input id="nome" placeholder="Nome do evento" />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        required
                        name={["nomeParticipante"]}
                        label={["Nome do participante"]}
                        tooltip="Nome completo do participante"
                        rules={[
                          {
                            required: true,
                            message:
                              "Voc?? deve informar o nome do participante",
                          },
                        ]}
                      >
                        <Input placeholder="Nome completo" />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        label={["Idade"]}
                        name={["idade"]}
                        validateTrigger={["onBlur"]}
                        rules={[
                          {
                            required: true,
                            message:
                              "?? obrigat??rio definir a idade do participante",
                          },
                          {
                            type: "number",
                            min: 18,
                            message:
                              "O cadastro de menores de 18 anos n??o ?? permitido",
                          },
                        ]}
                        tooltip="Menores de 18 anos n??o s??o permitidos nos eventos."
                      >
                        <InputNumber min={1} max={99} />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        name={["data"]}
                        label={["Data"]}
                        tooltip="N??o ?? permitido cadastrar eventos em datas passadas."
                        rules={[
                          {
                            required: true,
                            message: "Voc?? deve definir uma data para o evento",
                          },
                        ]}
                      >
                        <DatePicker
                          id="data"
                          className="date"
                          placeholder="Data"
                          format={formatDate}
                          disabledDate={(d) => d.isBefore(actualDateFormat)}
                        />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        required
                        name={["horario"]}
                        label={["Hor??rio de in??cio e t??rmino do evento"]}
                        tooltip="Hor??rio de in??cio deve ser inferior ao hor??rio de t??rmino."
                        rules={[
                          {
                            required: true,
                            message:
                              "Voc?? deve informar os hor??rios em que o evento come??a e termina",
                          },
                          ({ getFieldValue }) => ({
                            validator() {
                              console.log(
                                getFieldValue("horario")[0]._d,
                                getFieldValue("horario")[1]._d
                              );

                              if (
                                getFieldValue("horario")[0]._d >
                                getFieldValue("horario")[1]._d
                              ) {
                                return Promise.reject(
                                  new Error(
                                    "O hor??rio de in??cio deve ser inferior ao hor??rio de t??rmino"
                                  )
                                );
                              }
                              return Promise.resolve();
                            },
                          }),
                        ]}
                      >
                        <TimePicker.RangePicker
                          onChange={onChangeTime}
                          className="timePicker"
                          format={formater}
                          placeholder={["In??cio", "T??rmino"]}
                          id="tempo"
                        />
                      </Form.Item>
                      <Button
                        className="mySubmit"
                        type="primary"
                        htmlType="submit"
                        size="large"
                        shape="round"
                        icon={<ArrowRightOutlined />}
                        style={{
                          lineHeight: "20px",
                          fontSize: "18px",
                          padding: "7px 25px",
                          width: "225px",
                          justifyContent: "center",
                        }}
                      >
                        Cadastrar Evento
                      </Button>
                    </Form>
                  </ConfigProvider>
                </div>
              </div>
            </SimpleBar>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>SAVINIS?? - 2021-2021</Footer>
      </Layout>
      <MyFooter />
    </>
  );
};

export default FormSizeDemo;
