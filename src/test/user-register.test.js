import test from 'ava';
import { config } from 'dotenv';
import fetch from 'node-fetch';

config();
const ENDPOINT = `http://localhost:${process.env.PORT}/register`

const VALID_USER_1 = {
    id: '9d2dffd6-d656-4284-b419-b62164aaadb3',
    name: 'Testing',
    email: 'test@test.com',
    password: 'test123456'
}

// eslint-disable-next-line no-unused-vars
const VALID_USER_2 = {
    id: '5d9516b7-cec9-49da-b565-699cf6d3969e',
    name: 'Testing alt',
    email: 'testalt@test.com',
    password: 'test1234'
}

const fetchRegister = async (t, user) => {
    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return response;
    } catch (err) {
        t.fail(err)
    }
}

test('Register succesfully', async (t) => {
    const EXPECTED_STATUS_CODE = 201;

    const response = await fetchRegister(t, VALID_USER_1)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Invalid ID format', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        id: 'invalid-uuid'
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Invalid name format', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        id: 'invalid-uuid'
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Invalid email format', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        id: 'invalid-uuid'
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Invalid password format', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        id: 'invalid-uuid'
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Missing fields', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        id: VALID_USER_1.id,
        name: VALID_USER_1.name,
        email: VALID_USER_1.email,
        // Missing password
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Unnecesary fields', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        age: 25,
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Dupplicated ID', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        id: 'invalid-uuid'
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});

test('Register failed - Dupplicated email', async (t) => {
    const EXPECTED_STATUS_CODE = 400;

    const user = {
        ...VALID_USER_1,
        id: 'invalid-uuid'
    }

    const response = await fetchRegister(t, user)

    t.is(response.status, EXPECTED_STATUS_CODE);
    t.fail(
        `Expected status code ${EXPECTED_STATUS_CODE}, but received ${response.status}`
    );
});