from marshmallow import Schema, fields, validate
from utils import N_LETTERS

class Name(Schema):
    name = fields.String(
        required=True,
        validate=[
            validate.Regexp(r'^[a-zA-Z]+$', error="Name must contain only letters"),
            validate.Length(min=1, max=N_LETTERS, error=f"Name must be between 1 and {N_LETTERS} characters long")
        ]
    )