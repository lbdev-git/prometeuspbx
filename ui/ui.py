from django.utils.translation import gettext_lazy as _

from ui import views
from ui.pages.base import UIPage


class DashboardHomePage(UIPage):
    path = ""
    path_name = "dashboard-home"
    view = views.DashboardHomeView.as_view()
    menu_label = _("Home")
    menu_icon = "home"
    menu_section = "dashboard"


class DashboardUsersPage(UIPage):
    path = "users"
    path_name = "dashboard-users"
    view = views.DashboardUsersView.as_view()
    menu_label = _("Users")
    menu_icon = "user"
    menu_section = "dashboard"
    menu_has_sub_path = True


class DashboardEditUserPage(UIPage):
    path = "users/<uuid:pk>/"
    path_name = "dashboard-user-edit"
    view = views.DashboardEditUserView.as_view()


class DashboardSetPassword(UIPage):
    path = "users/<uuid:pk>/set-password/"
    path_name = "dashboard-user-set-password"
    view = views.DashboardUserSetPassword.as_view()


ui_patterns = [
    DashboardHomePage,
    DashboardUsersPage,
    DashboardEditUserPage,
    DashboardSetPassword,
]
