import React from 'react'
import { Form, Icon, Input } from "antd";
import { Button, Block } from "../../../components";
import { Link } from 'react-router-dom';

import { validateField } from '../../../utils/helpers'

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;

    const success = false;

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item 
                        validateStatus={validateField("email", touched, errors)}
                        hasFeedback>
                        <Input
                            id="email" 
                            prefix={
                                <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                            }
                            size="large"
                            placeholder="E-Mail"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={
                                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                            }
                            size="large"
                            placeholder="Ваше имя"
                        />
                    </Form.Item>
                    <Form.Item 
                        validateStatus={validateField("password", touched, errors)}
                        help={!touched.password ? "" : errors.password}
                        hasFeedback>
                        <Input
                            id="password" 
                            prefix={
                                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                            }
                            size="large"
                            type="password"
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={validateField("password", touched, errors)}>
                        <Input 
                            prefix={
                                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                            }
                            size="large"
                            type="password2"
                            placeholder="Повторите пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            onClick={handleSubmit}
                            type="primary"
                            size="large">
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/login">
                        Войти в аккаунт
                    </Link>
                </Form>
                ) : (
                    <div className="auth__success-block">
                        <div>
                            <Icon 
                                type="info-circle" 
                                theme="twoTone" />
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправлено письмо со ссылкой на подтверждение аккаунта.</p>
                    </div>
                )}
            </Block>
        </div>
    );
};

export default RegisterForm;