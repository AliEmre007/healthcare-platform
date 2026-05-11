# FHIR-style Mapping

This project implements FHIR-inspired JSON resources for learning and portfolio demonstration. It is not a complete or certified FHIR implementation.

## Patient Mapping

- `resourceType`: `Patient`
- `id`: patient ID
- `identifier`: medical record number and optional masked/hash identifier
- `name`: patient name
- `telecom`: phone and email
- `gender`: gender
- `birthDate`: birth date
- `address`: address

## Practitioner Mapping

- `resourceType`: `Practitioner`
- `id`: practitioner ID
- `identifier`: license number
- `name`: practitioner name
- `qualification`: specialty and role type

## Appointment Mapping

- `resourceType`: `Appointment`
- `id`: appointment ID
- `status`: appointment status
- `start`: start time
- `end`: end time
- `participant`: patient and practitioner references

## Encounter Mapping

- `resourceType`: `Encounter`
- `id`: encounter ID
- `status`: encounter status
- `class`: encounter type
- `subject`: patient reference
- `participant`: practitioner reference
- `period`: start and end time

## Observation Mapping

- `resourceType`: `Observation`
- `id`: lab result ID
- `status`: final or preliminary status
- `code`: result code and name
- `subject`: patient reference
- `encounter`: encounter reference through lab order
- `valueQuantity`: value and unit
- `referenceRange`: reference range
- `interpretation`: abnormal flag

## Limitations

The API omits many official FHIR requirements, profiles, terminology bindings, search parameters, versioning rules, and validation rules.
