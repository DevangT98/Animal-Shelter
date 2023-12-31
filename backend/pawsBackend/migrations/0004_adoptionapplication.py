# Generated by Django 4.2.7 on 2023-12-03 19:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pawsBackend', '0003_doglisting_date_added'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdoptionApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=20)),
                ('why_adopt', models.TextField()),
                ('alone_time', models.CharField(max_length=50)),
                ('house_type', models.CharField(max_length=50)),
                ('home_owner', models.CharField(max_length=3)),
                ('owned_dog_before', models.CharField(max_length=3)),
                ('additional_note', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
