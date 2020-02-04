import React from 'react'
import { Form, Field } from 'react-final-form';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { isEmail, isAlphabetic } from './helpers';
import * as C from './constants';
import { CommentsAction } from '../../store/AllComments/constants';
import { createNewComment } from '../../store/AllComments/actions';
import CreateFieldContent from '../../components/CreateFieldContent/CreateFieldContent';
import * as P from './parts';

const AddCommentForm: React.FC<C.AddCommentFormProps> = ({ createNewComment, setComentCreated }) => {
  const handleValidate = (values: C.FormValues) => {
    let errors: C.Errors = {};
    const { username, email, textarea } = values;

    if (!username) {
      errors.username = 'To pole jest wymagane'
    } else if (!isAlphabetic(username)) {
      errors.username = 'To pole może składać się tylko z liter'
    } else if (username.length < 3) {
      errors.username = 'To pole musi zawierać min. 3 znaki'
    }

    if (!email) {
      errors.email = 'To pole jest wymagane'
    } else if (!isEmail(email)) {
      errors.email = 'Podaj poprawny adres email'
    }

    if (!textarea) {
      errors.textarea = 'To pole jest wymagane'
    } else if (textarea.length < 2) {
      errors.textarea = 'To pole musi zawierać min. 2 znaki'
    }

    return errors
  }

  const onSubmit = (values: C.FormValues) => {
    createNewComment(values);
    setComentCreated(true);
  }

  return (
    <Form onSubmit={onSubmit} validate={handleValidate} validateOnBlur={true}>
      {({ handleSubmit }) => (
        <P.Form onSubmit={handleSubmit}>
          <P.FormInputSection>
            <Field name='username'>
              {({ input, meta }) => (
                <CreateFieldContent
                  meta={meta}
                  labelText={'Nazwa'}
                >
                  <P.Input  {...input} type={'input'} />
                </CreateFieldContent>
              )}
            </Field>
          </P.FormInputSection>
          <P.FormInputSection>
            <Field name='email'>
              {({ input, meta }) => (
                <CreateFieldContent
                  meta={meta}
                  labelText={'Email'}
                >
                  <P.Input {...input} type={'email'} />
                </CreateFieldContent>
              )}
            </Field>
          </P.FormInputSection>
          <P.FormTextareaSection>
            <Field name='textarea' component='textarea'>
              {({ input, meta }) => (
                <CreateFieldContent
                  meta={meta}
                  labelText={'Komentarz'}
                >
                  <P.Textarea {...input} />
                </CreateFieldContent>
              )}
            </Field>
          </P.FormTextareaSection>
          <P.SubmitButton type="submit">Utwórz komentarz</P.SubmitButton>
        </P.Form>
      )}
    </Form>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<CommentsAction>) => ({
  createNewComment: (formValues: C.FormValues) => dispatch(createNewComment(formValues)),
});

export default connect(null, mapDispatchToProps)(AddCommentForm);