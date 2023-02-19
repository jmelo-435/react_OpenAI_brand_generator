# Generated by Django 4.1.3 on 2023-02-19 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Business_Info',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('keywords', models.JSONField(max_length=5)),
                ('type', models.CharField(max_length=20)),
                ('description', models.TextField(blank=True, max_length=400, null=True)),
                ('atributes', models.JSONField(max_length=5)),
            ],
        ),
    ]
