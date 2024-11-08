from django.contrib.auth import get_user_model
from django.test import TestCase

class UsersManagersTests(TestCase):

    def test_create_superuser(self):
        db = get_user_model()
        super_user = db.objects.create_superuser(email="super@user.com", password="foo", first_name="firstName", last_name="lastName")
        self.assertEqual(super_user.email, "super@user.com")
        self.assertEqual(super_user.first_name, "firstName")
        self.assertEqual(super_user.last_name, "lastName")
        self.assertTrue(super_user.is_active)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_superuser)
        self.assertEqual(str(super_user), "super@user.com")
        try:
            self.assertIsNone(super_user.username)
        except AttributeError:
            pass

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email="super@user.com", password="foo", first_name="firstName", last_name="lastName", is_superuser=False)
        
        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email="super@user.com", password="foo", first_name="firstName", last_name="lastName", is_staff=False)

    def test_create_user(self):
        db = get_user_model()
        user = db.objects.create_user(email="normal@user.com", password="foo", first_name="firstName", last_name="lastName")
        self.assertEqual(user.email, "normal@user.com")
        self.assertEqual(user.first_name, "firstName")
        self.assertEqual(user.last_name, "lastName")
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_active)

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email='', password="foo", first_name="firstName", last_name="lastName", is_staff=False)

        