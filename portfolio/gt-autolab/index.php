<!DOCTYPE html>
<html lang="ru">

<head>
    <title>GT AUTOLAB</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="plugins/jquery.mask.js"></script>
    <script src="plugins/datepicker.js"></script>
    <script src="//unpkg.com/autonumeric"></script>
    <script src="js/main.js"></script>
    <script src="js/check_zip.min.js"></script>
    <link rel="stylesheet" type="text/css" href="scss/styles/styles.css">
</head>

<body>

<?php require_once 'data.php' ?>


<div class="wrapper">
    <div class="wrapper__inner">

        <div class="tabs">

            <div class="tabs__title title">Register Yourself</div>

            <div class="tabs__header">
                <div class="tabs__header-item done active" data-tabs-header-name="personal_information">
                    <div class="tabs__header-item-icon"></div>
                    <div class="tabs__header-item-name">Personal Information</div>
                </div>
                <div class="tabs__header-item not-ready" data-tabs-header-name="employment">
                    <div class="tabs__header-item-icon"></div>
                    <div class="tabs__header-item-name">Employment</div>
                </div>
                <div class="tabs__header-item not-ready disabled" data-tabs-header-name="co_app_info">
                    <div class="tabs__header-item-icon"></div>
                    <div class="tabs__header-item-name">Co-app Info</div>
                </div>
                <div class="tabs__header-item not-ready disabled" data-tabs-header-name="co_employment">
                    <div class="tabs__header-item-icon"></div>
                    <div class="tabs__header-item-name">Co-Employment</div>
                </div>
                <div class="tabs__header-item not-ready" data-tabs-header-name="review">
                    <div class="tabs__header-item-icon"></div>
                    <div class="tabs__header-item-name">Review</div>
                </div>
                <div class="tabs__header-item not-ready" data-tabs-header-name="submit">
                    <div class="tabs__header-item-icon"></div>
                    <div class="tabs__header-item-name">Submit</div>
                </div>
            </div>

            <div class="tabs__items">

                <!-- Personal_information -->
                <div class="tabs__item active" data-tabs-name="personal_information">
                    <div class="tabs__item-header">
                        <div class="tabs__item-header-name">Personal Information</div>
                        <div class="tabs__item-header-arrow"></div>
                    </div>
                    <div class="tabs__item-inner-block">
                        <div class="tabs__item-inner">
                            <div class="form form-check" id="personal_information">
                                <div class="form__main">
                                    <div class="form__items">

                                        <!-- Last Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Last Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text copy-val"
                                                               placeholder="Last Name" data-name="last_name" data-copy-val-goal="submit_last_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Middle Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Middle Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Middle Name" data-name="middle_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- First Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                First Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text copy-val"
                                                               placeholder="First Name" data-name="first_name" data-copy-val-goal="submit_first_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Birthday -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Birthday
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required, birthday-check">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input datepicker-input--birthday"
                                                               placeholder="Birthday"
                                                               data-name="birthday">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- SSN -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                SSN
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--ssn" placeholder="SSN"
                                                               data-name="ssn">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="zip"
                                                               data-city-goal="city" data-state-goal="state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address" data-name="address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Apt/Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Apt/Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Apt/Suite" data-name="apt">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Email
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required, email-check">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Email" data-name="email">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone number -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Phone number
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--phone-number"
                                                               placeholder="Phone number"
                                                               data-name="phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Type of residence -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Type of residence
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="type_of_residence" data-monthly-payment="monthly_payment">
                                                        <option value="option-placeholder">Type of residence</option>
                                                        <? foreach ($residence_types as $residence_type) { ?>
                                                            <option value="<?= $residence_type ?>"><?= $residence_type ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Live there since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Live there since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input check-natural-block"
                                                               placeholder="Live there since"
                                                               data-name="live_there_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Monthly payment -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Monthly payment
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text income" placeholder="Monthly payment"
                                                               data-name="monthly_payment">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="form__natural hide">
                                    <div class="form__natural-title">Previous address</div>

                                    <div class="form__items">

                                        <!-- Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address" data-name="prev_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Apt/Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Apt/Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Apt/Suite" data-name="prev_apt">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="prev_zip"
                                                               data-city-goal="prev_city" data-state-goal="prev_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field-point" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="prev_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="prev_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Live there since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Live there since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input"
                                                               placeholder="Live there since"
                                                               data-name="prev_live_there_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form__button tabs__switch form-check__button set-result"
                                     data-tabs-goal="employment">Save and Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Employment -->
                <div class="tabs__item hide not-ready" data-tabs-name="employment">
                    <div class="tabs__item-header">
                        <div class="tabs__item-header-name">Employment</div>
                        <div class="tabs__item-header-arrow"></div>
                    </div>
                    <div class="tabs__item-inner-block">
                        <div class="tabs__item-inner">
                            <div class="form form-check" id="employment">
                                <div class="form__main">
                                    <div class="form__items">

                                        <!-- Employer Name -->
                                        <div class="form__item form__item--66">
                                            <div class="form__item-title">
                                                Employer Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Employer Name" data-name="employer_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone number -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Phone number
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--phone-number"
                                                               placeholder="Phone number"
                                                               data-name="employer_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Business Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Business Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address" data-name="employer_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Suite" data-name="employer_suite">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="employer_zip"
                                                               data-city-goal="employer_city"
                                                               data-state-goal="employer_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="employer_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="employer_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Employed since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Employed since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input check-natural-block"
                                                               placeholder="Employed since"
                                                               data-name="employer_employed_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Position -->
                                        <div class="form__item form__item--22">
                                            <div class="form__item-title">
                                                Position
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Position" data-name="employer_position">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Gross Annual Income -->
                                        <div class="form__item form__item--22">
                                            <div class="form__item-title">
                                                Gross Annual Income
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text income"
                                                               placeholder="Gross Annual Income"
                                                               data-name="employer_gross_annual_income">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Other Income -->
                                        <div class="form__item form__item--22">
                                            <div class="form__item-title">
                                                Other Income
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text income other-income" placeholder="Other Income"
                                                               data-name="employer_other_income" data-source-income-goal="employer_source_of_other_income">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Source of other income -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Source of other income
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Source of other income"
                                                               data-name="employer_source_of_other_income">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- If co-app checkbox -->
                                        <div class="form__item form__item--no-title form__item--66">
                                            <div class="checkbox">
                                                <div class="checkbox__item">
                                                    <input class="checkbox__item-input" id="if_co_app_checkbox"
                                                           name="if_co_app_checkbox" value="if_co_app_checkbox"
                                                           type="checkbox" data-name="employer_if_co_app_checkbox"/>
                                                    <label class="checkbox__item-label" for="if_co_app_checkbox">
                                                        Please check here if you would like to add a co-applicant to the
                                                        current application.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Relationship -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Relationship
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="employer_co_app_relationship">
                                                        <option value="option-placeholder">Relationship</option>
                                                        <? foreach ($relationships as $relationship) { ?>
                                                            <option value="<?= $relationship ?>"><?= $relationship ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__natural hide">
                                    <div class="form__natural-title">Previous employer information</div>
                                    <div class="form__items">

                                        <!-- Employer Name -->
                                        <div class="form__item form__item--66">
                                            <div class="form__item-title">
                                                Employer Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Employer Name"
                                                               data-name="prev_employer_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone number -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Phone number
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--phone-number"
                                                               placeholder="Phone number (optional)"
                                                               data-name="prev_employer_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Business Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Business Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address" data-name="prev_employer_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Suite" data-name="prev_employer_suite">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="prev_employer_zip"
                                                               data-city-goal="prev_employer_city"
                                                               data-state-goal="prev_employer_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field-point" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="prev_employer_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="prev_employer_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Employed since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Employed since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input"
                                                               placeholder="Employed since"
                                                               data-name="prev_employer_employed_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form__button tabs__switch form-check__button set-result"
                                     data-tabs-goal="review" id="co_app_button">Save and Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Co-app-info -->
                <div class="tabs__item hide not-ready disabled" data-tabs-name="co_app_info">
                    <div class="tabs__item-header">
                        <div class="tabs__item-header-name">Co-Applicant Personal Information</div>
                        <div class="tabs__item-header-arrow"></div>
                    </div>
                    <div class="tabs__item-inner-block">
                        <div class="tabs__item-inner">
                            <div class="form form-check" id="co_app_info">
                                <div class="form__main">
                                    <div class="form__items">

                                        <!-- Last Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Last Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text copy-val"
                                                               placeholder="Last Name" data-name="co_app_last_name" data-copy-val-goal="co-app-submit_last_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Middle Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Middle Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Middle Name" data-name="co_app_middle_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- First Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                First Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text copy-val"
                                                               placeholder="First Name" data-name="co_app_first_name" data-copy-val-goal="co-app-submit_first_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Birthday -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Birthday
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required, birthday-check">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input datepicker-input--birthday"
                                                               placeholder="Birthday"
                                                               data-name="co_app_birthday">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- SSN -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                SSN
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--ssn" placeholder="SSN"
                                                               data-name="co_app_ssn">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="co_app_zip"
                                                               data-city-goal="co_app_city"
                                                               data-state-goal="co_app_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address" data-name="co_app_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Apt/Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Apt/Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Apt/Suite" data-name="co_app_apt">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="co_app_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="co_app_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Email
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required, email-check">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Email" data-name="co_app_email">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone number -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Phone number
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--phone-number"
                                                               placeholder="Phone number"
                                                               data-name="co_app_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Type of residence -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Type of residence
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="co_app_type_of_residence" data-monthly-payment="co_app_monthly_payment">
                                                        <option value="option-placeholder">Type of residence</option>
                                                        <? foreach ($residence_types as $residence_type) { ?>
                                                            <option value="<?= $residence_type ?>"><?= $residence_type ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Live there since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Live there since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input check-natural-block"
                                                               placeholder="Live there since"
                                                               data-name="co_app_live_there_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Monthly payment -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Monthly payment
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text income" placeholder="Monthly payment"
                                                               data-name="co_app_monthly_payment">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="form__natural hide">
                                    <div class="form__natural-title">Previous address</div>
                                    <div class="form__items">

                                        <!-- Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address" data-name="co_app_prev_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Apt/Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Apt/Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Apt/Suite" data-name="co_app_prev_apt">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="co_app_prev_zip"
                                                               data-city-goal="co_app_prev_city"
                                                               data-state-goal="co_app_prev_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field-point" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="co_app_prev_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="co_app_prev_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Live there since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Live there since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input"
                                                               placeholder="Live there since"
                                                               data-name="co_app_prev_live_there_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form__button tabs__switch form-check__button set-result"
                                     data-tabs-goal="co_employment">Save and Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Co-employment -->
                <div class="tabs__item hide not-ready disabled" data-tabs-name="co_employment">
                    <div class="tabs__item-header">
                        <div class="tabs__item-header-name">Co-Applicant Employment</div>
                        <div class="tabs__item-header-arrow"></div>
                    </div>
                    <div class="tabs__item-inner-block">
                        <div class="tabs__item-inner">
                            <div class="form form-check" id="co_employment">
                                <div class="form__main">
                                    <div class="form__items">

                                        <!-- Employer Name -->
                                        <div class="form__item form__item--66">
                                            <div class="form__item-title">
                                                Employer Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Employer Name"
                                                               data-name="co_app_employer_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone number -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Phone number
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--phone-number"
                                                               placeholder="Phone number"
                                                               data-name="co_app_employer_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Business Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Business Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address"
                                                               data-name="co_app_employer_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Suite" data-name="co_app_employer_suite">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="co_app_employer_zip"
                                                               data-city-goal="co_app_employer_city"
                                                               data-state-goal="co_app_employer_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="co_app_employer_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="co_app_employer_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Employed since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Employed since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input check-natural-block"
                                                               placeholder="Employed since"
                                                               data-name="co_app_employer_employed_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Position -->
                                        <div class="form__item form__item--22">
                                            <div class="form__item-title">
                                                Position
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Position"
                                                               data-name="co_app_employer_position">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Gross Annual Income -->
                                        <div class="form__item form__item--22">
                                            <div class="form__item-title">
                                                Gross Annual Income
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text income"
                                                               placeholder="Gross Annual Income"
                                                               data-name="co_app_employer_gross_annual_income">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Other Income -->
                                        <div class="form__item form__item--22">
                                            <div class="form__item-title">
                                                Other Income
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text income other-income" placeholder="Other Income"
                                                               data-name="co_app_employer_other_income" data-source-income-goal="co_app_employer_source_of_other_income">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Source of other income -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Source of other income
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Source of other income"
                                                               data-name="co_app_employer_source_of_other_income">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form__natural hide">
                                    <div class="form__natural-title">Previous employer information</div>
                                    <div class="form__items">

                                        <!-- Employer Name -->
                                        <div class="form__item form__item--66">
                                            <div class="form__item-title">
                                                Employer Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Employer Name"
                                                               data-name="co_app_prev_employer_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone number -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Phone number
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text mask mask--phone-number"
                                                               placeholder="Phone number (optional)"
                                                               data-name="co_app_prev_employer_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Business Address -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Business Address
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Address"
                                                               data-name="co_app_prev_employer_address">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Suite -->
                                        <div class="form__item form__item--17">
                                            <div class="form__item-title">
                                                Suite
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Suite"
                                                               data-name="co_app_prev_employer_suite">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- ZIP -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                ZIP
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text zip"
                                                               placeholder="ZIP" data-name="co_app_prev_employer_zip"
                                                               data-city-goal="co_app_prev_employer_city"
                                                               data-state-goal="co_app_prev_employer_state">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- State -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                State
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field-point" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="co_app_prev_employer_state">
                                                        <option value="option-placeholder">State</option>
                                                        <? foreach ($states as $state) { ?>
                                                            <option value="<?= $state ?>"><?= $state ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- City -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                City
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="City" data-name="co_app_prev_employer_city">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Employed since -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Employed since
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input"
                                                               placeholder="Employed since"
                                                               data-name="co_app_prev_employer_employed_since">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form__button tabs__switch form-check__button set-result"
                                     data-tabs-goal="review">Save and Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Review -->
                <div class="tabs__item hide not-ready" data-tabs-name="review">
                    <div class="tabs__item-header">
                        <div class="tabs__item-header-name">Review</div>
                        <div class="tabs__item-header-arrow"></div>
                    </div>
                    <div class="tabs__item-inner-block">
                        <div class="tabs__item-inner">
                            <div class="review">
                                <div class="review__item-wrapper">
                                    <div class="review__item">
                                        <div class="review__col" data-col-source="personal_information">
                                            <div class="review__col-header">Personal_information</div>
                                            <div class="review__col-values">

                                            </div>
                                        </div>

                                        <div class="review__col" data-col-source="employment">
                                            <div class="review__col-header">Employment</div>
                                            <div class="review__col-values">

                                            </div>
                                        </div>

                                        <div class="review__col disabled" data-col-source="co_app_info">
                                            <div class="review__col-header">Co-app-info</div>
                                            <div class="review__col-values">

                                            </div>
                                        </div>

                                        <div class="review__col disabled" data-col-source="co_employment">
                                            <div class="review__col-header">Co-employment</div>
                                            <div class="review__col-values">

                                            </div>
                                        </div>

                                    </div>
                                    <div class="form__button tabs__switch" data-tabs-goal="submit">Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Submit -->
                <div class="tabs__item hide not-ready" data-tabs-name="submit">
                    <!--                <div class="tabs__item hide not-ready" data-tabs-name="submit">-->
                    <div class="tabs__item-header">
                        <div class="tabs__item-header-name">Submit</div>
                        <div class="tabs__item-header-arrow"></div>
                    </div>
                    <div class="tabs__item-inner-block">
                        <div class="tabs__item-inner">
                            <div class="form form-check" id="submit">
                                <div class="form__main">
                                    <div class="form__items">
                                        <!-- Last Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Applicant's Last Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Last Name" data-name="submit_last_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- First Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Applicant's First Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="First Name" data-name="submit_first_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Sign date -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Sign date
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input datepicker-input--sign-date"
                                                               placeholder="Sign date"
                                                               data-name="submit_sign_date">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__main disabled" data-cign-info="co-app">
                                    <div class="form__items">
                                        <!-- Last Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Co-applicant's Last Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="Last Name"
                                                               data-name="co-app-submit_last_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- First Name -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Co-applicant's First Name
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo" class="input__text"
                                                               placeholder="First Name"
                                                               data-name="co-app-submit_first_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Sign date -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Sign date
                                            </div>
                                            <div class="form__item-input">
                                                <div class="input form-check__field-point" data-check-type="input"
                                                     data-check="input-required">
                                                    <div class="input__button">
                                                        <input type="text" autocomplete="photo"
                                                               class="input__text datepicker-input datepicker-input--sign-date"
                                                               placeholder="Sign date"
                                                               data-name="co-app-submit_sign_date">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form__main">
                                    <div class="form__rules">
                                        <div class="form__rules-inner">
                                            <h5>Terms and Conditions</h5>
                                            <p>
                                                APPLICATION DISCLOSURE AND AGREEMENT
                                                You understand and agree that you are applying for credit by providing
                                                the
                                                information to
                                                complete and
                                                submit this credit application. We may keep this application and any
                                                other
                                                application
                                                submitted to us
                                                and information about you whether or not the application is approved.
                                                You certify
                                                that the
                                                information
                                                on the application and in any other application submitted to us, is true
                                                and
                                                complete. You
                                                understand
                                                that false statements may subject you to criminal penalties.
                                                The words ???you???, ???your??? and ???yours??? mean each person submitting this
                                                application.
                                                The words
                                                ???we???,
                                                ???us???, ???our??? and ???ours??? as used below refer to us, the dealer, and to the
                                                financial
                                                institution(s) selected
                                                to receive your application.
                                                You authorize us to submit this application and any other application
                                                submitted in
                                                connection with the
                                                proposed transaction to the financial institutions disclosed to you by
                                                us the
                                                dealers. This
                                                application will
                                                be reviewed by such financial institutions on behalf of themselves and
                                                us the
                                                dealer. In
                                                addition, in
                                                accordance with the Fair Credit Reporting Act, you authorize that such
                                                financial
                                                institutions may submit
                                                your applications to other financial institutions for the purpose of
                                                fulfilling your
                                                request
                                                to apply for
                                                credit.
                                                You agree that we may obtain a consumer credit report periodically from
                                                one or more
                                                consumer
                                                reporting agencies (credit bureaus) in connection with the proposed
                                                transaction and
                                                any
                                                update,
                                                renewal, refinancing, modification or extension of that transaction. You
                                                also agree
                                                that we
                                                or any
                                                affiliate of ours may obtain one or more consumer credit reports on you
                                                at any time
                                                whatsoever. If you
                                                ask, you will be told whether a credit report was requested, and if so,
                                                the name and
                                                address
                                                of any
                                                credit bureau from which we or our affiliate obtained your credit
                                                report.
                                                You agree that we may verify your employment, pay, assets and debts, and
                                                that anyone
                                                receiving a copy
                                                of this is authorized to provide us with such information. You further
                                                authorize us
                                                to
                                                gather whatever
                                                credit and employment history we consider necessary and appropriate in
                                                evaluating
                                                this
                                                application and
                                                any other applications submitted in connection with the proposed
                                                transaction. You
                                                understand
                                                that we
                                                will rely on the information in this credit application in making our
                                                decision.
                                                FEDERAL NOTICES
                                                IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT
                                                If applicable to your credit transaction, to help the government fight
                                                the funding
                                                of
                                                terrorism and money
                                                laundering activities, Federal law requires financial institutions to
                                                obtain,
                                                verify, and
                                                record information
                                                that identifies each person who opens an account. What this means for
                                                you: When you
                                                open an
                                                account, you will be asked for your name, address, date of birth, and
                                                other
                                                information to
                                                identify you.
                                                You may also be asked to see your driver's license or other identifying
                                                documents.
                                                STATE NOTICES
                                                California Residents: An applicant, if married, may apply for a separate
                                                account.
                                                Maine and Tennessee Residents: You must have physical damage insurance
                                                covering loss
                                                or
                                                damage to
                                                the vehicle for the term of the contract. For a lease, you must also
                                                have the
                                                liability
                                                insurance as
                                                described in the lease. You may purchase required insurance through any
                                                insurance
                                                agent or
                                                broker and
                                                from any insurance company that is reasonably acceptable to us. You are
                                                not required
                                                to deal
                                                with any
                                                of our affiliates when choosing an agent, broker or insurer. Your choice
                                                of a
                                                particular
                                                insurance agent,
                                                broker or insurer will not affect our credit decision, so long as the
                                                insurance
                                                provides
                                                adequate coverage
                                                with an insurer who meets our reasonable requirements.
                                                New Hampshire Residents: If you are applying for a balloon payment
                                                contract, you are
                                                entitled, if you
                                                ask, to receive a written estimate of the monthly payment amount for
                                                refinancing the
                                                balloon
                                                payment
                                                in accord with the creditor???s existing refinance programs. You would be
                                                entitled to
                                                receive
                                                the estimate
                                                before you enter into a balloon payment contract. A balloon contract is
                                                an
                                                installment sales
                                                contract
                                                with a final scheduled payment that is at least twice the amount of one
                                                of the
                                                earlier
                                                scheduled equal
                                                periodic installment payments.
                                                New York Residents: In connection with your application for credit, a
                                                consumer
                                                report may be
                                                obtained
                                                from a consumer reporting agency (credit bureau). If credit is extended,
                                                the party
                                                or
                                                parties extending
                                                credit or holding such credit may order additional consumer reports in
                                                connection
                                                with any
                                                update,
                                                renewal or extension of the credit. If you ask, you will be told whether
                                                a consumer
                                                report
                                                was requested
                                                and, if so, the name and address of any consumer reporting agency
                                                (credit bureau)
                                                from which
                                                such
                                                credit report was obtained.
                                                Ohio Residents: Ohio laws against discrimination require that all
                                                creditors make
                                                credit
                                                equally available
                                                to all creditworthy customers and that credit reporting agencies
                                                maintain separate
                                                credit
                                                histories on
                                                each individual upon request. The Ohio Civil Rights Commission
                                                administers
                                                compliance with
                                                this law.
                                                Rhode Island Residents: Consumer reports may be requested in connection
                                                with this
                                                application. Buyer
                                                has the right of free choice in selecting an insurer to provide
                                                insurance required
                                                in
                                                connection with this
                                                transaction subject to our reasonable approval in accordance with
                                                applicable law.
                                                Vermont Residents: You authorize us and any financial institution with
                                                which this
                                                credit
                                                application is
                                                shared, and each of their respective employees or agents, to obtain and
                                                verify
                                                information
                                                about you
                                                (including one or more credit reports, information about your employment
                                                and banking
                                                and
                                                credit
                                                relationships) that they may deem necessary or appropriate in evaluating
                                                your credit
                                                application. If your
                                                credit application is approved and credit is granted, you also authorize
                                                the parties
                                                granting credit or
                                                holding your account, and their respective employees and agents, to
                                                obtain
                                                additional credit
                                                reports and
                                                other information about you in connection with reviewing the account,
                                                increasing the
                                                available credit on
                                                the account (if applicable), taking collection on the account, or for
                                                any other
                                                legitimate
                                                purpose.
                                                Married Wisconsin Residents: No provision of any marital property
                                                agreement, any
                                                unilateral
                                                statement
                                                under Wis. Stat ?? 766.59 or any court decree under ?? 766.70 applied to
                                                marital
                                                property
                                                adversely
                                                affects our interest unless you furnish a copy of the agreement,
                                                statement, or court
                                                decree
                                                or we have
                                                actual knowledge of such adverse provision before credit is granted. If
                                                you are
                                                making this
                                                credit
                                                application individually and not jointly with your spouse, complete
                                                Section A about
                                                yourself
                                                and Section
                                                B about your non-applicant spouse. Your non-applicant spouse should not
                                                sign the
                                                credit
                                                application if
                                                you are applying for individual credit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="form__main">
                                    <div class="form__items">
                                        <!-- Upload -->
                                        <div class="form__item form__item--50">
                                            <div class="form__item-title">
                                                Choose a file<br>Select multiple attachments by pressing &lt;Ctrl&gt; button.
                                            </div>
                                            <div class="form__item-input">
                                                <label class="file-upload">
                                                    <div class="file-upload__label">Attach</div>
                                                    <input type="file" multiple="multiple" name="file" class="file-upload__input"/>
                                                    <div class="file-upload__name-block">

                                                    </div>
                                                </label>


                                            </div>
                                        </div>

                                        <!-- Agree checkbox -->
                                        <div class="form__item form__item--no-title form__item--66">
                                            <div class="checkbox form-check__field" data-check-type="input"
                                                 data-check="checkbox-required">
                                                <div class="checkbox__item">
                                                    <input class="checkbox__item-input" id="if_agree_checkbox"
                                                           name="if_agree_checkbox" value="if_agree_checkbox"
                                                           type="checkbox" data-name="if_agree_checkbox"/>
                                                    <label class="checkbox__item-label" for="if_agree_checkbox">
                                                        I agree to the terms and conditions of service
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Salesperson -->
                                        <div class="form__item form__item--33">
                                            <div class="form__item-title">
                                                Salesperson
                                            </div>
                                            <div class="form__item-input">
                                                <div class="select form-check__field" data-check-type="select"
                                                     data-check="select-required">
                                                    <select data-name="submit_salesperson">
                                                        <option value="option-placeholder">Salesperson</option>
                                                        <? foreach ($salespersons as $salesperson) { ?>
                                                            <option value="<?= $salesperson[0] ?>"><?= $salesperson[1] ?></option>
                                                        <? } ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form__button form-check__button set-result form-submit">Submit</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

<div class="modal__background"></div>

<div class="modal__block no-close" id="modal_success">
    <div class="modal__content">
        <div class="modal__content-icon"></div>
        <div class="modal__content-text">Your application has been successfully submitted.</div>

    </div>

</div>

</body>


