import * as sanitize from 'sanitize-html';
import * as crypto from 'crypto';

import confiq from '../../confiq';
import makeInputObjFactory from "./make-input-object";

const errorMsgs = confiq.ERROR_MSG.post;

const md5 = (text) => 
crypto
.createHash("md5")
.update(text, "utf8")
.digest("hex");

const makeInputObj = ({
    params
}) => makeInputObjFactory({md5, sanitize})
.inputObj({params, errorMsgs})

//dali e vaka ok?
const makeOutputObj = ({
    params
}) => makeInputObjFactory({md5, sanitize})
.inputObj({params, errorMsgs})


export{
    makeInputObj,
    makeOutputObj
}