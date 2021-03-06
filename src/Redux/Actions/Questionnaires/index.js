import ActionTypes from './Types';
import Axios from '../../../Lib/Common/Axios';

export const startFetchingQuestionnaires = () => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES_START,
});
export const questionnairesFetched = data => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES_SUCCESS,
  data,
});
export const rejectedFetchingQuestionnaires = () => ({
  type: ActionTypes.FETCH_QUESTIONNAIRES_FAILURE,
});
export const questionnaireCreated = questionnaire => ({
  type: ActionTypes.CREATE_QUESTIONNAIRE_SUCCESS,
  questionnaire,
});
export const startCreateQuestionnaire = () => ({
  type: ActionTypes.CREATE_QUESTIONNAIRE_START,
});
export const rejectedCreateQuestionnaire = () => ({
  type: ActionTypes.CREATE_QUESTIONNAIRE_FAILURE,
});
export const questionnaireUpdated = () => ({
  type: ActionTypes.UPDATE_QUESTIONNAIRE_SUCCESS,
});
export const startUpdateQuestionnaire = () => ({
  type: ActionTypes.UPDATE_QUESTIONNAIRE_START,
});
export const rejectedUpdateQuestionnaire = () => ({
  type: ActionTypes.UPDATE_QUESTIONNAIRE_FAILURE,
});
export const startDeleteQuestionnaire = () => ({
  type: ActionTypes.DELETE_QUESTIONNAIRE_START,
});
export const questionnaireDeleted = () => ({
  type: ActionTypes.DELETE_QUESTIONNAIRE_SUCCESS,
});
export const rejectedDeleteQuestionnaire = () => ({
  type: ActionTypes.DELETE_QUESTIONNAIRE_FAILURE,
});
export const startFetchingQuestionnaire = () => ({
  type: ActionTypes.FETCH_QUESTIONNAIRE_START,
});
export const questionnaireFetched = data => ({
  type: ActionTypes.FETCH_QUESTIONNAIRE_SUCCESS,
  questionnaire: data.json,
  morePages: data.morePages,
});
export const rejectedFetchingQuestionnaire = () => ({
  type: ActionTypes.FETCH_QUESTIONNAIRE_FAILURE,
});
export const questionCreated = () => ({
  type: ActionTypes.CREATE_QUESTION_SUCCES,
});
export const startCreateQuestion = () => ({
  type: ActionTypes.CREATE_QUESTION_START,
});
export const rejectedCreateQuestion = () => ({
  type: ActionTypes.CREATE_QUESTION_FAILURE,
});
export const questionUpdated = () => ({
  type: ActionTypes.UPDATE_QUESTION_SUCCES,
});
export const startUpdateQuestion = () => ({
  type: ActionTypes.UPDATE_QUESTION_START,
});
export const rejectedUpdateQuestion = () => ({
  type: ActionTypes.UPDATE_QUESTION_FAILURE,
});
export const OptionDeleted = () => ({
  type: ActionTypes.DELETE_OPTION_SUCCES,
});
export const startDeleteOption = () => ({
  type: ActionTypes.DELETE_OPTION_START,
});
export const rejectedDeleteOption = () => ({
  type: ActionTypes.DELETE_OPTION_FAILURE,
});

export const removeActiveQuestionnaire = () => ({
  type: ActionTypes.REMOVE_ACTIVEQUESTIONNAIRE,
});
export const startDeleteQuestion = () => ({
  type: ActionTypes.DELETE_QUESTION_START,
});
export const questionDeleted = () => ({
  type: ActionTypes.DELETE_QUESTION_SUCCESS,
});
export const rejectedDeleteQuestion = () => ({
  type: ActionTypes.DELETE_QUESTION_FAILURE,
});

/* eslint-disable no-console */
export const fetchQuestionnaires = page => (dispatch) => {
  dispatch(startFetchingQuestionnaires());
  Axios.get(`/my-questionnaires?page=${page}&limit=10`)
    .then((response) => {
      dispatch(questionnairesFetched(response.data));
    })
    .catch(() => {
      dispatch(rejectedFetchingQuestionnaires());
    });
};

export const createQuestionnaire = data => (dispatch) => {
  dispatch(startCreateQuestionnaire());
  Axios.post('/my-questionnaires', data)
    .then((res) => {
      dispatch(questionnaireCreated(res.data));
    })
    .catch(() => {
      dispatch(rejectedCreateQuestionnaire());
    });
};

export const deleteQuestionnaire = (id, page) => (dispatch) => {
  dispatch(startDeleteQuestionnaire());
  Axios.delete(`/my-questionnaires/${id}`)
    .then(() => {
      dispatch(fetchQuestionnaires(page));
      dispatch(questionnaireDeleted());
    })
    .catch(() => {
      dispatch(rejectedDeleteQuestionnaire());
    });
};

export const fetchQuestionnaire = (id, page) => (dispatch) => {
  dispatch(startFetchingQuestionnaire());
  Axios.get(`/questionnaires/${id}?page=${page}&limit=5`)
    .then((response) => {
      dispatch(questionnaireFetched(response.data));
    })
    .catch(() => {
      dispatch(rejectedFetchingQuestionnaire());
    });
};

export const updateQuestionnaire = (id, data, page) => (dispatch) => {
  dispatch(startUpdateQuestionnaire());
  Axios.put(`/my-questionnaires/${id}`, data)
    .then(() => {
      dispatch(questionnaireUpdated());
      dispatch(fetchQuestionnaire(id, page));
    })
    .catch(() => {
      dispatch(rejectedUpdateQuestionnaire());
    });
};

export const createQuestion = (data, page) => (dispatch) => {
  dispatch(startCreateQuestion());
  Axios.post('/questions', data)
    .then(() => {
      dispatch(fetchQuestionnaire(data.questionnaireId, page));
      dispatch(questionCreated());
    })
    .catch(() => {
      dispatch(rejectedCreateQuestion());
    });
};

export const updateQuestion = (data, id, questionnaireId, page) => (dispatch) => {
  dispatch(startUpdateQuestion());
  Axios.put(`/questions/${id}`, data)
    .then(() => {
      dispatch(fetchQuestionnaire(questionnaireId, page));
      dispatch(questionUpdated());
    })
    .catch(() => {
      dispatch(rejectedUpdateQuestion());
    });
};

export const deleteOption = (id, questionId) => (dispatch) => {
  dispatch(startDeleteOption());
  Axios.delete(`/questions/${questionId}/options/${id}`)
    .then(() => {
      dispatch(OptionDeleted());
    })
    .catch(() => {
      dispatch(rejectedDeleteOption());
    });
};

export const deleteQuestion = (id, questionnaireId, page) => (dispatch) => {
  dispatch(startDeleteQuestion());
  Axios.delete(`/questions/${id}`)
    .then(() => {
      dispatch(fetchQuestionnaire(questionnaireId, page));
      dispatch(questionDeleted());
    })
    .catch(() => {
      dispatch(rejectedDeleteQuestion());
    });
};
